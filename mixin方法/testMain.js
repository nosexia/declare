define([
    'declare',
    '_YellowDog'
], function(declare, _YellowDog){

    var yellowDog = new _YellowDog();
    yellowDog.initOptions({
        'name': 'nose',
        'hunger': true
    }).init();

});