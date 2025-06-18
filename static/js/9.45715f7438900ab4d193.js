webpackJsonp([9],{

/***/ "RxBX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/wowjs/dist/wow.js
var dist_wow = __webpack_require__("q4TV");
var wow_default = /*#__PURE__*/__webpack_require__.n(dist_wow);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/Software.vue
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


/* harmony default export */ var Software = ({
    name: 'Software',
    data: function data() {
        return {
            softwareList: [{
                path: '/software/smartTown',
                name: '智能小镇管理系统'
            }, {
                path: '/software/bigData',
                name: '大数据管理系统'
            }]
        };
    },
    mounted: function mounted() {
        var wow = new dist_wow["WOW"]();
        wow.init();
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f375bc5","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/Software.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"Software"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-12",attrs:{"id":"left"}},[_c('ul',{staticClass:"left-container wow bounceInLeft"},[_c('p',[_vm._v("软件产品")]),_vm._v(" "),_vm._l((_vm.softwareList),function(item,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":item.path}},[_vm._v(_vm._s(item.name))])],1)})],2)]),_vm._v(" "),_c('div',{staticClass:"col-md-8 col-xs-12 wow bounceInRight",attrs:{"id":"right"}},[_c('router-view')],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var view_Software = (esExports);
// CONCATENATED MODULE: ./src/view/Software.vue
function injectStyle (ssrContext) {
  __webpack_require__("bePY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f375bc5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Software,
  view_Software,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_view_Software = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bePY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=9.45715f7438900ab4d193.js.map