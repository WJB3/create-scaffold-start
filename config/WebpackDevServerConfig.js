const paths=require('./paths');
const ignoredFiles=require('../utils/ignoredFiles');
const getHttpsConfig=require('../utils/getHttpsConfig');

const host=process.env.HOST || '0.0.0.0';

module.exports=function(proxy,allowedHost){
    return {
        //为每个静态文件开启gzip
        compress:true,
        //沉默webpackdevserver自己的日志，因为通常他们是无用的
        //它仍会展示警告和错误
        clientLogLevel:'none',
        contentBase:paths.appPublic,
        contentBasePublicPath:paths.publicUrlOrPath,
        //默认情况下，来自' contentBase '的文件不会触发页面重新加载。 启用后，文件更改将触发整个页面重新加载。
        watchContentBase:true,
        //启用 webpack 的 Hot Module Replacement 功能：
        hot: true,
        transportMode:'ws',
        injectClient:false,
        quiet: true,
        watchOptions:{
            ignored: ignoredFiles(paths.appSrc),
        },
        https:getHttpsConfig(),
        //指定要使用的 host。如果你希望服务器可从外部访问.0.0.0.0
        host,
        //出现编译器错误或警告时，在浏览器中显示全屏覆盖
        overlay:false,  
        proxy,
        
    }
    
}