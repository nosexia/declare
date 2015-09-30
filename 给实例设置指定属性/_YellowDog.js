define([
    'declare',
    '_Dog'
],function(declare, _Dog){

    // 生成YellowDog类，declare方法
    YellowDog = declare([_Dog]);
    return YellowDog;
});