'use strict';

process.env.BABEL_ENV='development';
process.env.NODE_ENV='development';

// require("../config/env");

//该项目现在是否有运行终端
const isInteractive=process.stdout.isTTY;

const DEFAULT_PORT=parseInt(process.env.PORT,10) || 3000;
const HOST=process.env.HOST || '0.0.0.0';




