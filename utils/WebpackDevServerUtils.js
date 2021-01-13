//端口检测器的javascript实现
const detect = require('detect-port-alt');
//检查进程是否以root用户身份运行
const isRoot=require('is-root');
const clearConsole=require("./clearConsole");
const getProcessForPort = require('./getProcessForPort');

function choosePort(host,defaultPort){
    return detect(defaultPort,host).then(
        port=>new Promise(resolve=>{
            //如果运行在默认端口
            if(port===defaultPort){
                return resolve(port);
            }
            const message=process.platform!=='win32' && defaultPort<1024 && !isRoot()
            //在1024以下的端口上运行服务器需要管理员权限。
            ? 'Admin permissions are required to run a server on a port below 1024.'
            //在端口{defaultPort}上已经运行了一些东西
            : `Something is already running on port ${defaultPort}.`

            if(isInteractive){
                clearConsole();
                const existingProcess=getProcessForPort(defaultPort);
                const question={
                    type:'confirm',
                    name:'shouldChangePort',
                }
            }
        })
    )
}





module.exports={
    choosePort
}