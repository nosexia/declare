/**
 * Created by rick on 2015/8/3.
 */

define([
    'jquery',
    'futu/_base/declare',
    'futu/_base/form'
], function($, declare){
    var _FormBase = function(options) {
        this.initOptions(options);
        this.init();
    };

    _FormBase.prototype.initOptions = function(options) {
        declare.mixin(this, options);
        return this;
    };

    _FormBase.prototype.init = function() {
        if (this.isDynamic) {
            this.initDynamicForm();
        } else {
            this.initStaticForm();
        }
        this.initNodes();
        this.initInputs();
        this.initDefaultValidations();
        this.initDefaultTips();
        this.bindInputEvents();
        var self = this;
        this.$form.submit(function(){
            self.onSubmit();
            return false;
        });
    };

    _FormBase.prototype.initDynamicForm = $.noop;

    _FormBase.prototype.initStaticForm = $.noop;

    _FormBase.prototype.initNodes = $.noop;

    _FormBase.prototype.initInputs = $.noop;

    _FormBase.prototype.initDefaultValidations = $.noop;

    _FormBase.prototype.initDefaultTips = $.noop;

    _FormBase.prototype.bindEvents = $.noop;

    _FormBase.prototype.onSubmit = $.noop;

    return _FormBase;
});
