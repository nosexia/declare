define([
    'declare'
], function(declare){

    //New一个Dog类
    function Dog(options){
        this.initOptions(options).init();
    }

    Dog.prototype.initOptions = function(options){
        //给实例扩展属性，方法
        declare.mixin(this, options);
        return this;
    };

    Dog.prototype.init = function(){
        console.log('调用_Dog的init方法');       
    };

    return Dog;

});