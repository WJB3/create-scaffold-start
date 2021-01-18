const paths=require('./paths');
const ignoredFiles=require('../utils/ignoredFiles');
const getHttpsConfig=require('../utils/getHttpsConfig');

const host=process.env.HOST || 'localhost';

module.exports=function(proxy,allowedHost){
    return {
        //为每个静态文件开启gzip
        compress:true, 
        //启用 webpack 的 Hot Module Replacement 功能：
        hot: true,
        transportMode:'ws',
        injectClient:false, 
        https:getHttpsConfig(),
        //指定要使用的 host。如果你希望服务器可从外部访问.0.0.0.0
        host,
        //出现编译器错误或警告时，在浏览器中显示全屏覆盖
        overlay:false,  
        proxy,
        
    }
    
}