/**
 * 1.为什么要有模块化
 * 2.匿名闭包 解决命名冲突 但是 
 * 3.不同的js文件 命名模块的名称导出，只需注意模块名称不重复即可
 * */ 
 var moudleA = (function(){
     var obj = {};
     obj.flag = true;
     obj.myfunc = function(info){
         console.log(info);
     }
     return obj;
 })

 /**
  * 1.commonJS的模块化
  * 2.ES6的模块化（导入和导出）
  * 3.CMD模块化
  * 4.AMD模块化
  * 
  * 
  * ---------------------------
  * 1.commonJS的导入和导出
  * 导出:
  * moudle.exports = {
  *     var flag = false;
  *     test(a,b){
  *         return a+b;
  *     }    
  * }
  * 
  * 导入:
  * let { test , demo , flag } = require('moudleA'); 
  * 
  * ---------------------------
  * 2.ES6
  * 导出:
  * 
  * 
  * 
  * 
 */

