'use strict';

const fs=require('fs');
const path=require('path');
const paths=require("./paths");

const NODE_ENV=process.env.NODE_ENV;
if(!NODE_ENV){
    throw new Error(
        'The NODE_ENV environment variable is requires but was not specified'
    );
}

