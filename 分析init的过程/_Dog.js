define([
    'declare'
], function(declare){

    //New一个Dog类
    function Dog(options){
        console.log('初始化Dog');
        //this.initOptions(options).init();
    }

    Dog.prototype.initOptions = function(options){
        //给实例扩展属性，方法
        declare.mixin(this, options);
        return this;
    };

    Dog.prototype.init = function(){
        this.isHunger();        
    };

    Dog.prototype.isHunger = function(){
        if(this.hunger){
            console.log(this.name + '饿了');
        }
    };
    return Dog;

});