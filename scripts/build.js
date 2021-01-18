'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const isInteractive = process.stdout.isTTY;

const path = require('path');
const paths = require('../config/paths');
const chalk = require('chalk');
const webpack = require('webpack');
const fs = require('fs-extra');
const FileSizeReporter = require('../utils/FileSizeReporter');
const configFactory = require('../config/webpack.config');


const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const config = configFactory('production');


const { checkBrowsers } = require('../utils/browersHelper');
checkBrowsers(paths.appPath, isInteractive)
    .then(() => {
        return measureFileSizesBeforeBuild(paths.appBuild);
    })
    .then(previousFileSizes => {
        
        fs.emptyDirSync(paths.appBuild);
        // Merge with the public folder
        copyPublicFolder();
        // Start the webpack build
        return build(previousFileSizes);
    })
    .then(
        ({stats,previousFileSizes,warnings})=>{
            
        }
    
    )
    .catch(err=>{
        if(err && err.message){
            console.log(err.message)
        }
        process.exit(1);
    })

function build(previousFileSizes){
    console.log('Creating an optimized production build...');
 
    const compiler=webpack(config); 

    compiler.hooks.failed.tap('failed', err => {
 
        console.log(chalk.red('Failed to compile.\n'));
        console.log(err);
        console.log('\n');
        process.exit(1);
    });
    
  
    return new Promise((resolve,reject)=>{
        compiler.run((err,stats)=>{
          
            console.log(err)
            console.log(stats)
         
        })
    })
}

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml,
    });
}