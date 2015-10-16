define([
    'declare'
], function(declare){
    function Dog(){
        this.init();
    }
    Dog.prototype.init = function(){
        console.log('Dog初始化了');
    };
    return Dog;


});