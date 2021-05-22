/**
 * index.js：webpack入口起点文件
 * 1.运行指令：
 * 开发环境：webpack ./src/index.js -o ./build --mode=development
 *          webpack会以./src/index.js为入口文件开始打包  打包后输出到./build文件夹下 webpack5.0.0以上的版本会在build文件夹下自动生成main.js
 *           整体打包环境是开发环境
 * 生产环境: webpack ./src/index.js -o ./build --mode=production
 *             整体打包环境是生产环境环境
 * 2.结论：
 * 1）webpack能处理js/json资源，不能处理css/img等其他资源
 * 2）生产环境和开发环境能将ES6模块化编译成浏览器能识别的模块化
 * 3）生产环境打包会压缩js代码
 */

 import data from './data.json';
 console.log(data);
 function add (x,y) {
    return x+y;
 }
 console.log(add(1,2));