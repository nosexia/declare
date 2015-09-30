define([
    'declare',
    '_Dog'
],function(declare, _Dog){

    // 生成YellowDog类，declare方法
    YellowDog = declare([_Dog],{
        init:function(){
            console.log('初始化YellowDog');        
        }
    });
    return YellowDog;
});