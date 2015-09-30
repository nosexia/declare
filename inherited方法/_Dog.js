define([
    'declare'
], function(declare){
    Dog.prototype.age = function(){
        console.log('_YellowDog继承_Dog的age');
    }
    return Dog;


});