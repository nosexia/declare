define([
    'declare',
    '_YellowDog'
], function(declare, _YellowDog){

    var yellowDog = new _YellowDog();
});


//总结
//_YellowDog的init覆盖_Dog的init方法，
//只是覆盖，_Dog的init方法还是存在