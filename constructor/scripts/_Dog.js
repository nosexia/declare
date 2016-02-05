(function(root, factory){
	if(typeof define === 'function' && define.amd){
		// amd
		define(['scripts/lib/declare.js'], factory);
	}else if( typeof exports === 'object' ){
		// cmd
		module.exports = factory( require('scripts/lib/declare.js') );
	}else{
		// global
		root._Dogs = factory( require('scripts/lib/declare.js') );
	}
})(this, function(declare){
	// 实例化_Dog类（内部狗）
	return declare(null, {
		constructor: function(){
			console.log('实例化内部狗');
		}
	});	

});


// @todo, 这里路径搞不懂