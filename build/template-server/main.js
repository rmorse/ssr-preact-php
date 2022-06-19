/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/color/index.js":
/*!***************************************!*\
  !*** ./src/components/color/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file:///D:/xampp/htdocs/bitbucket/ssr-preact-php/node_modules/babel-plugin-jsx-template-vars/language/index.js */ "./node_modules/babel-plugin-jsx-template-vars/language/index.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");


/**
 * A Color component, for demo purposes.
 */

/** @jsx h */

/** @jsxFrag Fragment */

var Color = function Color(_ref) {
  var color = _ref.color,
      _ref$placeholder = _ref.placeholder,
      _uid2 = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      __context__ = _ref.__context__;

  var _uid4 = typeof __context__ === 'number' ? __context__ : 0;

  var _uid3 = [(0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)('primitive', null, _uid4)];

  var _uid2 = (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageReplace)('format', 'placeholder', _uid4);

  var _uid = (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageReplace)('format', 'label', _uid4);

  var _uid = color.label,
      value = color.value,
      connotations = color.connotations;
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h3", null, _uid), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h4", null, "Connotations"), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("ul", null, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "connotations", _uid4), _uid3.map(function (connotation, index) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("li", null, connotation);
  }), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "connotations", _uid4))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);

/***/ }),

/***/ "./src/components/person/index.js":
/*!****************************************!*\
  !*** ./src/components/person/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file:///D:/xampp/htdocs/bitbucket/ssr-preact-php/node_modules/babel-plugin-jsx-template-vars/language/index.js */ "./node_modules/babel-plugin-jsx-template-vars/language/index.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color */ "./src/components/color/index.js");
var _excluded = ["name", "dob", "favoriteColors", "favoriteArtists", "traits", "showColors", "showArtists"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * A Person component, for demo purposes.
 */


/** @jsx h */

/** @jsxFrag Fragment */

var Person = function Person(_ref) {
  var _uid = _ref.name,
      _uid2 = _ref.dob,
      favoriteColors = _ref.favoriteColors,
      favoriteArtists = _ref.favoriteArtists,
      traits = _ref.traits,
      _ref$showColors = _ref.showColors,
      showColors = _ref$showColors === void 0 ? true : _ref$showColors,
      _ref$showArtists = _ref.showArtists,
      showArtists = _ref$showArtists === void 0 ? true : _ref$showArtists,
      props = _objectWithoutProperties(_ref, _excluded),
      __context__ = _ref.__context__;

  var _uid9 = typeof __context__ === 'number' ? __context__ : 0;

  var _uid8 = [(0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)('primitive', null, _uid9)];

  var _uid7 = [{
    name: (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("ojectProperty", "name", _uid9),
    genre: (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("ojectProperty", "genre", _uid9)
  }];
  var _uid6 = [{
    value: (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("ojectProperty", "value", _uid9),
    label: (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("ojectProperty", "label", _uid9)
  }];

  var _uid2 = (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageReplace)('format', 'dob', _uid9);

  var _uid = (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageReplace)('format', 'name', _uid9);

  var showTest = 'yes';

  var favoriteColorsList = _uid6.map(function (color, index) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_color__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: color,
      key: index,
      __context__: _uid9 + 1
    });
  });

  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("section", {
    "class": "profile"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h1", null, _uid), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("p", null, "Date of birth: ", _uid2), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifTruthy", "open"], ["showColors"], _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Favorite Colors"), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "favoriteColors", _uid9), favoriteColorsList, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "favoriteColors", _uid9))), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifTruthy", "close"], ["showColors"], _uid9), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifTruthy", "open"], ["showArtists"], _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Favorite Artists"), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "favoriteArtists", _uid9), _uid7.map(function (artist, index) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: index
    }, artist.name, " | ", artist.genre);
  }), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "favoriteArtists", _uid9))), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifTruthy", "close"], ["showArtists"], _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Character traits"), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "traits", _uid9), _uid8.map(function (trait, index) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, "A trait: ", trait);
  }), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "traits", _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Character traits raw"), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "traits", _uid9), _uid8, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "traits", _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Combining control + replace variables"), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifEqual", "open"], ["showTest", "'yes'"], _uid9), _uid, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifEqual", "close"], ["showTest", "'yes'"], _uid9), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, "Combining control + list variables"), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifEqual", "open"], ["showTest", "'yes'"], _uid9), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("open", "traits", _uid9), _uid8, (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)("close", "traits", _uid9), (0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageControl)(["ifEqual", "close"], ["showTest", "'yes'"], _uid9));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);

/***/ }),

/***/ "./node_modules/babel-plugin-jsx-template-vars/language/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-jsx-template-vars/language/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLanguageString": () => (/* binding */ createLanguageString),
/* harmony export */   "getLanguageControl": () => (/* binding */ getLanguageControl),
/* harmony export */   "getLanguageList": () => (/* binding */ getLanguageList),
/* harmony export */   "getLanguageReplace": () => (/* binding */ getLanguageReplace),
/* harmony export */   "getLanguageString": () => (/* binding */ getLanguageString)
/* harmony export */ });
// Specify languages to translate to here
// For now we can categories as replace, list and control
// But we should look at another structure in the future.

// The main language object the currently used language is stored in
// const language = ...;
// Which will be injected above here by the template vars plugin.

/**
 * Replaces tokens such as ||%1|| and ||%2|| with the arguments passed in.
 *
 * Note: index starts at 1, not 0.
 *
 * @param {String} string The soruce string
 * @param {Array} argsArray The arguments to replace
 * @returns {String} The string with the arguments replaced
 */
function createLanguageString( string, argsArray, context ) {
	let str = string.replace( /\|\|\%(\d+)\|\|/g, ( match, key ) => {
		const matchIndex = parseInt( match.replace( /\D/g, '' ) );
		return argsArray[ matchIndex -1 ];
	} );

	// Now replace the var with the context
	str = str.replace( /\|\|\%(var)\|\|/g, ( match, key ) => {
		if ( context === 0 ) {
			return `data`;
		}
		return `data_${ context }`;
	} );

	return str.replace( /\|\|\%(subVar)\|\|/g, ( match, key ) => {
		return `data_${ context + 1 }`;
	} );
}

/**
 * @param {String} type The variable type (replace, list, control)
 * @param {Array} targetString And array of paths/properties to target the desired string.
 * @param {Array} argsArray The arguments to replace
 * @returns {String} The string with the arguments replaced
 */
 function getLanguageString( type, targetString = [], argsArray = [], context ) {
	let languageWithPath = window.templateVarsLanguage[ type ];
	targetString.forEach( ( targetString, index ) => {
		if ( languageWithPath[ targetString ] ) {
			languageWithPath = languageWithPath[ targetString ];
		}
	} );

	return createLanguageString( languageWithPath, argsArray, context );
}

function getLanguageReplace( target, arg, context ) {
	return getLanguageString( 'replace', [ target ], [ arg ], context );
}

function getLanguageList( target, arg, context ) {
	return getLanguageString( 'list', [ target ], [ arg ], context );
}

function getLanguageControl( targets, args, context ) {
	return getLanguageString( 'control', targets, args, context );
}


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "toChildArray": () => (/* binding */ A)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file:///D:/xampp/htdocs/bitbucket/ssr-preact-php/node_modules/babel-plugin-jsx-template-vars/language/index.js */ "./node_modules/babel-plugin-jsx-template-vars/language/index.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/person */ "./src/components/person/index.js");

window.templateVarsLanguage = {
  "name": "php",
  "replace": {
    "format": "<?php echo htmlspecialchars( $||%var||[ '||%1||' ], ENT_QUOTES ); ?>"
  },
  "list": {
    "open": "<?php foreach ( $||%var||[ '||%1||' ] as $||%subVar|| ) { ?>",
    "close": "<?php } ?>",
    "ojectProperty": "<?php echo htmlspecialchars( $||%subVar||[ '||%1||' ], ENT_QUOTES ); ?>",
    "primitive": "<?php echo htmlspecialchars( $||%subVar||, ENT_QUOTES ); ?>"
  },
  "control": {
    "ifTruthy": {
      "open": "<?php if ( $||%var||[ '||%1||' ] ) { ?>",
      "close": "<?php } ?>"
    },
    "ifFalsy": {
      "open": "<?php if ( ! $||%var||[ '||%1||' ] ) { ?>",
      "close": "<?php } ?>"
    },
    "ifEqual": {
      "open": "<?php if ( $||%var||[ '||%1||' ] === ||%2|| ) { ?>",
      "close": "<?php } ?>"
    },
    "ifNotEqual": {
      "open": "<?php if ( $||%var||[ '||%1||' ] !== ||%2|| ) { ?>",
      "close": "<?php } ?>"
    }
  }
};

/**
 * The main entry point for your application.
 */


/** @jsx h */

/** @jsxFrag Fragment */

var App = function App(_ref) {
  var __context__ = _ref.__context__;

  var _uid2 = typeof __context__ === 'number' ? __context__ : 0;

  var _uid = [(0,file_D_xampp_htdocs_bitbucket_ssr_preact_php_node_modules_babel_plugin_jsx_template_vars_language_index_js__WEBPACK_IMPORTED_MODULE_0__.getLanguageList)('primitive', null, _uid2)];

  // These props really should be coming via a store / external data source that can be mirrored on the server.
  var favoriteColors = [{
    label: 'Red',
    value: 'red',
    connotations: ['danger', 'life', 'war']
  }, {
    label: 'Green',
    value: 'green',
    connotations: ['growth', 'health', 'nature']
  }, {
    label: 'Blue',
    value: 'blue',
    connotations: ['peace', 'calm', 'serenity']
  }];
  var favoriteArtists = [{
    name: 'Joy Division',
    genre: 'Alternative/Indie'
  }, {
    name: 'Robert Palmer',
    genre: 'Pop'
  }];
  var traits = ['Friendly', 'Charming', 'Snarky'];
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_components_person__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dob: '1/1/1985',
    name: 'Mary',
    favoriteColors: favoriteColors,
    favoriteArtists: favoriteArtists,
    traits: traits,
    __context__: _uid2
  }));
};

var init = function init() {
  (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(App, null), document.body);
};

if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('DOMContentLoaded', function (event) {
    init();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map