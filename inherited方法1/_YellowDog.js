define([
    'declare',
    '_Dog'
],function(declare, _Dog){
    //delcare方法 _Dog为YellowDog父类
    var YellowDog = declare([_Dog], {
        init: function(){
            //调用_Dog上面init方法
            this.inherited(arguments);
            this.initYellowDog();
        },

        initYellowDog: function(){
            console.log('YellowDog 初始化了');
        }

    });
    return YellowDog;
});