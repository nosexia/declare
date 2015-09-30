define([
    'declare',
    '_Dog'
],function(declare, _Dog){
    var YellowDog = declare([_Dog], {
        age: function(){
            //调用this.inherited方法，YellowDog实例，调用_Dog原型上的age方法
            return this.inherited(arguments);
        }
    });
    return YellowDog;
});