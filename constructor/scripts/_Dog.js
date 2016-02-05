(function(root, factory){	
	root._Dog = factory( root.declare );
})(this, function(declare){
	// 实例化_Dog类（内部狗）
	return declare(null, {
		constructor: function(){
			console.log('实例化内部狗');
		}
	});	

});


// @todo, 这里路径搞不懂