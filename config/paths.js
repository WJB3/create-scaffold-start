'use strict';
const path=require("path");
const fs=require("fs");
const getPublicUrlOrPath=require("../utils/getPublicUrlOrPath");


const moduleFileExtensions=[
    'js',
    'ts',
    'tsx',
    'jsx',
    'json'
]

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp=relativePath=>path.resolve(appDirectory,relativePath);

const publicUrlOrPath=getPublicUrlOrPath(
    process.env.NODE_ENV==='development',
    require(resolveApp("package.json")).homepage,
    process.env.PUBLIC_URL
)


const resolveModule=(resolveFn,filePath)=>{
    const extension=moduleFileExtensions.find(extension=>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );
    if(extension){
        return resolveFn(`${filePath}.${extension}`)
    }
    return resolveFn(`${filePath}.js`)
}
 


module.exports={
    appPath: resolveApp('.'),
    dotenv: resolveApp('.env'),
    appBuild: resolveApp('build'),
    appSrc: resolveApp('src'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs:resolveModule(resolveApp,'src/index'),
    appTsConfig: resolveApp('tsconfig.json'),
    appNodeModules:resolveModule(resolveApp,'node_modules'),
    publicUrlOrPath
}

module.exports.moduleFileExtensions = moduleFileExtensions;