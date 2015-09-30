define([
    'declare',
    '_Dog'
],function(declare, _Dog){

    // 生成YellowDog类，declare方法
    YellowDog = declare([_Dog],{
        init:function(){
            console.log('调用YellowDog的init方法');        
        }
    });
    return YellowDog;
});