webpackJsonp([2],{

/***/ "6AsK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FJQj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/service2.cb9ffd1.jpg";

/***/ }),

/***/ "PwBN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/service1.b3faff6.jpg";

/***/ }),

/***/ "R742":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/service3.af5de0b.jpg";

/***/ }),

/***/ "UW51":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/service4.d1fe54a.jpg";

/***/ }),

/***/ "X7sC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/wowjs/dist/wow.js
var dist_wow = __webpack_require__("q4TV");
var wow_default = /*#__PURE__*/__webpack_require__.n(dist_wow);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/Service.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Service = ({
    name: 'Service',
    data: function data() {
        return {
            serviceList: [{
                id: 'section-1',
                title: '软件定制开发',
                eng_title: 'Customize App',
                img: __webpack_require__("PwBN")
            }, {
                id: 'section-2',
                title: 'IT外包服务',
                eng_title: 'Outsourcing',
                img: __webpack_require__("FJQj")
            }, {
                id: 'section-3',
                title: '网上商城建设',
                eng_title: 'eCommerce Site',
                img: __webpack_require__("R742")
            }, {
                id: 'section-4',
                title: 'iOS应用定制开发',
                eng_title: 'iOS App Dev',
                img: __webpack_require__("UW51")
            }]
        };
    },
    mounted: function mounted() {
        var wow = new dist_wow["WOW"]();
        wow.init();
    },

    methods: {
        ServiceClick: function ServiceClick(id) {
            this.$router.push({
                name: 'servicedetail',
                params: {
                    id: id
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-110547c0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/Service.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Service"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"Service-container row"},_vm._l((_vm.serviceList),function(item,index){return _c('div',{key:index,staticClass:"Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp",on:{"click":function($event){return _vm.ServiceClick(item.id)}}},[_c('div',{staticClass:"Service-item-wrapper"},[_c('div',{staticClass:"Service-item-top"},[_c('h4',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('i'),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.eng_title))])]),_vm._v(" "),_c('div',{staticClass:"Service-item-img"},[_c('img',{attrs:{"src":item.img,"alt":"服务"}})]),_vm._v(" "),_c('div',{staticClass:"Service-item-border"})])])}),0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container text-center"},[_c('h3',[_vm._v("我们的服务")]),_vm._v(" "),_c('p',{staticStyle:{"color":"#b2b2b2"}},[_vm._v("The Best Service You Never See")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var view_Service = (esExports);
// CONCATENATED MODULE: ./src/view/Service.vue
function injectStyle (ssrContext) {
  __webpack_require__("6AsK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-110547c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Service,
  view_Service,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_view_Service = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=2.7975ef1610eaf430d8e5.js.map