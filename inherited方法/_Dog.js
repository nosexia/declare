define([
    'declare'
], function(declare){
    function Dog(){

    }
    Dog.prototype.age = function(){
        console.log('_YellowDog继承_Dog的age');
    };

    Dog.prototype.name = 'nose';
    return Dog;


});