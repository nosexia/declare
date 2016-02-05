require([
	'./lib/declare'
],function(declare){
	// 实例化_Dog类（内部狗）
	var _Dog = declare(null, {
		constructor: function(){
			console.log('实例化内部狗');
		}
	});

	var dog = new _Dog();
});