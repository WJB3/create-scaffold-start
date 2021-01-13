'use strict';

let chalk = require('chalk');
let execSync = require('child_process').execSync;
let path = require('path');

let execOptions = {
    encoding: 'utf8',
    stdio: [
        'pipe',
        'pipe',
        'ignore'
    ]
}

function getProcessIdOnPort(port) {
    return execSync('lsof -i:' + port + ' -P -t -sTCP:LISTEN', execOptions)
        .split('\n')[0]
        .trim();
}

function getPackageNameInDirectory(directory) {
    var packagePath = path.join(directory.trim(), 'package.json');

    try {
        return require(packagePath).name;
    } catch (e) {
        return null;
    }
}

function isProcessAReactApp(processCommand) {
    return /^node .*react-scripts\/scripts\/start\.js\s?$/.test(processCommand);
}

function getProcessCommand(processId, processDirectory) {
    var command = execSync(
        'ps -o command -p ' + processId + ' | sed -n 2p',
        execOptions
    );

    command = command.replace(/\n$/, '');

    if (isProcessAReactApp(command)) {
        const packageName = getPackageNameInDirectory(processDirectory);
        return packageName ? packageName : command;
    } else {
        return command;
    }
}


function getDirectoryOfProcessById(processId) {
    return execSync(
        'lsof -p ' +
        processId +
        ' | awk \'$4=="cwd" {for (i=9; i<=NF; i++) printf "%s ", $i}\'',
        execOptions
    ).trim();
}

function getProcessForPort(port) {
    try {
        var processId = getProcessIdOnPort(port);
        var directory = getDirectoryOfProcessById(processId);
        var command = getProcessCommand(processId, directory);
        return (
          chalk.cyan(command) +
          chalk.grey(' (pid ' + processId + ')\n') +
          chalk.blue('  in ') +
          chalk.cyan(directory)
        );
    } catch (e) {
        return null;
    }
}

module.exports = getProcessForPort;