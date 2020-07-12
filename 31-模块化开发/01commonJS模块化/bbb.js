//匿名函数
var moduleB = (function(){
    var obj = {};
    var name = '小红';
    var age = 18;
    var flag = false;
    obj.name = name;
    obj.flag = flag;

    function sum (num1,num2){
        
    }
    obj.sum = sum();
    return obj;
})()