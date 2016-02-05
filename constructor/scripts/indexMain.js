require([
	'./lib/declare'
],function(declare){
	// 定义_Dog类（内部狗）
	var _Dog = declare({
		instance: {
			constructor: function(){
				console.log('实例化内部狗');
			}
		}
	});

	var dog = new _Dog();
});