(self.webpackChunktoast=self.webpackChunktoast||[]).push([[179],{"./src/stories/Toast.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Board:function(){return Board},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Toast_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 24px;\n  color: #000;\n  text-align: center;\n  margin-top: 160px;\n"]))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ErrorBoundary=function(_Component){(0,inherits.Z)(ErrorBoundary,_Component);var _super=(0,createSuper.Z)(ErrorBoundary);function ErrorBoundary(props){var _this;return(0,classCallCheck.Z)(this,ErrorBoundary),(_this=_super.call(this,props)).state={hasError:!1},_this}return(0,createClass.Z)(ErrorBoundary,[{key:"render",value:function render(){var state=this.state,props=this.props;return state.hasError?(0,jsx_runtime.jsx)(styled,{children:"Something went wrong!"}):props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}]),ErrorBoundary}(react.Component);ErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0}}};var components_ErrorBoundary=ErrorBoundary;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/index.jsx"]={name:"ErrorBoundary",docgenInfo:ErrorBoundary.__docgenInfo,path:"src/components/ErrorBoundary/index.jsx"});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),handy_svg=__webpack_require__("./node_modules/handy-svg/index.js"),es=__webpack_require__("./node_modules/react-swipeable/es/index.js");var information=__webpack_require__.p+"static/media/information.89629db9e888e1bb9f1bb829757351b2.svg";var error=__webpack_require__.p+"static/media/error.7c706a35f6fb084147d9aabe34482d64.svg";var success=__webpack_require__.p+"static/media/success.9457ee746245c3957cafa051d72c7422.svg";var animations_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,styled_templateObject,styled_templateObject2,styled_templateObject3,styled_templateObject4,warning=__webpack_require__.p+"static/media/warning.f99395015c62922227a4b914c0304b2c.svg",Toast=function(){function Toast(){if((0,classCallCheck.Z)(this,Toast),Toast.exist)return Toast.instance;Toast.instance=this,Toast.exist=!0,this.toasts=[],this.id=0,this.timer=null,this.subscribers=new Map}return(0,createClass.Z)(Toast,[{key:"addToast",value:function addToast(toast){this.toasts.length<3&&(this.toasts.push((0,objectSpread2.Z)((0,objectSpread2.Z)({},toast),{},{id:this.id})),this.id+=1,this.notifyAll())}},{key:"removeToast",value:function removeToast(){var id=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.toasts=this.toasts.filter((function(item){return item.id!==id})),this.notifyAll()}},{key:"notifyAll",value:function notifyAll(){var _this=this;this.subscribers.forEach((function(callback){callback((0,toConsumableArray.Z)(_this.toasts))}))}},{key:"subscribe",value:function subscribe(subscriber,callback){this.subscribers.has(subscriber)||this.subscribers.set(subscriber,callback)}},{key:"unsubscribe",value:function unsubscribe(subscriber){this.subscribers.has(subscriber)&&this.subscribers.delete(subscriber)}}]),Toast}(),toast=new Toast,SLIDE_LEFT={forward:(0,styled_components_browser_esm.F4)(animations_templateObject||(animations_templateObject=(0,taggedTemplateLiteral.Z)(["\n        from { \n            transform: translateX(-100%);\n        }\n        to { \n            transform: translateX(0);\n        }\n    "]))),backward:(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n        from { \n            transform: translateX(0);\n        }\n        to { \n            transform: translateX(-100%);\n        }\n    "])))},SLIDE_RIGHT={forward:(0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n        from { \n            transform: translateX(100%);\n        }\n        to { \n            transform: translateX(0);\n        }\n    "]))),backward:(0,styled_components_browser_esm.F4)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n        from { \n            transform: translateX(0);\n        }\n        to { \n            transform: translateX(100%);\n        }\n    "])))},FADE={forward:(0,styled_components_browser_esm.F4)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n        from { \n            opacity: 0 \n        }\n        to {\n            opacity: 1 \n        }\n    "]))),backward:(0,styled_components_browser_esm.F4)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n        from { \n            opacity: 1 \n        }\n        to { \n            opacity: 0 \n        }\n    "])))},utils_getPositions=function getPositions(position){var selectedPosition={},animationPosition="";switch(position){case"top-right":selectedPosition={top:0,right:0},animationPosition="right";break;case"bottom-left":selectedPosition={bottom:0,left:0},animationPosition="left";break;case"bottom-right":selectedPosition={bottom:0,right:0},animationPosition="right";break;default:selectedPosition={top:0,left:0},animationPosition="left"}return{selectedPosition:selectedPosition,animationPosition:animationPosition}},ToastWrapper=styled_components_browser_esm.ZP.div(styled_templateObject||(styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  background-color: ",";\n  box-shadow: 4px 4px 8px #00000029;\n  border-radius: 24px;\n  cursor: pointer;\n  ",";\n  animation: ","\n    0.6s forwards;\n"])),(function(props){return props.background}),(function(props){return utils_getPositions(props.position).selectedPosition}),(function(_ref){var animation=_ref.animation,direction=_ref.direction,position=_ref.position;return function resolveAnimation(animation,direction,position){return"slide"===animation?"left"===position?SLIDE_LEFT[direction]:SLIDE_RIGHT[direction]:FADE[direction]}(animation,direction,utils_getPositions(position).animationPosition)})),ToastContent=styled_components_browser_esm.ZP.div(styled_templateObject2||(styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: ","px;\n"])),(function(props){return props.padding})),ToastTitle=styled_components_browser_esm.ZP.div(styled_templateObject3||(styled_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: block;\n  font-size: 22px;\n  font-weight: 400;\n  color: ",";\n  margin-left: 20px;\n  margin-right: 70px;\n"])),(function(props){return props.color})),ToastBtn=styled_components_browser_esm.ZP.div(styled_templateObject4||(styled_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  color: #fff;\n  font-size: 42px;\n"])));function Toast_Toast(props){var _useState=(0,react.useState)("forward"),_useState2=(0,slicedToArray.Z)(_useState,2),animationDirection=_useState2[0],setAnimationDirection=_useState2[1],_props$toast=props.toast,title=_props$toast.title,type=_props$toast.type,bgcolor=_props$toast.bgcolor,color=_props$toast.color,animation=_props$toast.animation,delay=_props$toast.delay,position=_props$toast.position,id=_props$toast.id,padding=_props$toast.padding,onCloseNotification=function onCloseNotification(){return function(){setAnimationDirection("backward")}};(0,react.useEffect)((function(){if(delay>500){var timer=setTimeout((function(){setAnimationDirection("backward")}),delay);return function(){return clearTimeout(timer)}}}),[delay]),(0,react.useEffect)((function(){if("backward"===animationDirection){var timer=setTimeout((function(){toast.removeToast(id)}),600);return function(){return clearTimeout(timer)}}}),[animationDirection,id]);var handlers=(0,es.QS)({onSwiped:onCloseNotification(),swipeDuration:600,preventScrollOnSwipe:!0,trackMouse:!0});return(0,jsx_runtime.jsx)(ToastWrapper,(0,objectSpread2.Z)((0,objectSpread2.Z)({},handlers),{},{background:bgcolor,position:position,animation:animation,direction:animationDirection,children:(0,jsx_runtime.jsxs)(ToastContent,{padding:padding,children:[(0,jsx_runtime.jsx)(ToastImg,{type:type,color:color}),(0,jsx_runtime.jsx)(ToastTitle,{color:color,children:title}),(0,jsx_runtime.jsx)(ToastBtn,{onClick:onCloseNotification(),children:"×"})]})}))}function ToastImg(_ref){var type=_ref.type,color=_ref.color;switch(type){case"warning":return(0,jsx_runtime.jsx)(handy_svg.HandySvg,{src:warning,fill:color,width:"50",height:"50"});case"error":return(0,jsx_runtime.jsx)(handy_svg.HandySvg,{src:error,fill:color,width:"50",height:"50"});case"success":return(0,jsx_runtime.jsx)(handy_svg.HandySvg,{src:success,fill:color,width:"50",height:"50"});default:return(0,jsx_runtime.jsx)(handy_svg.HandySvg,{src:information,fill:color,width:"50",height:"50"})}}Toast_Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{description:"",type:{name:"object"},required:!1}}};var components_Toast=Toast_Toast;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.jsx"]={name:"Toast",docgenInfo:Toast_Toast.__docgenInfo,path:"src/components/Toast/index.jsx"});var ToastsList_styled_templateObject,ToastsList_styled=styled_components_browser_esm.ZP.div(ToastsList_styled_templateObject||(ToastsList_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  margin-top: 20px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n"])));function ToastsList(){var toasts=function useToasts(){var _useState=(0,react.useState)(toast.toasts),_useState2=(0,slicedToArray.Z)(_useState,2),toastList=_useState2[0],setToastList=_useState2[1],updateList=function updateList(list){setToastList(list)};return(0,react.useEffect)((function(){return toast.subscribe("update_list",updateList),function(){toast.unsubscribe("update_list")}}),[]),toastList}();return(0,jsx_runtime.jsx)(ToastsList_styled,{children:toasts.map((function(item){return(0,jsx_runtime.jsx)(components_Toast,{toast:item},item.id)}))})}ToastsList.__docgenInfo={description:"",methods:[],displayName:"ToastsList"};var components_ToastsList=ToastsList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastsList/index.jsx"]={name:"ToastsList",docgenInfo:ToastsList.__docgenInfo,path:"src/components/ToastsList/index.jsx"});var react_dom=__webpack_require__("./node_modules/react-dom/index.js");var ToastsBoard_styled_templateObject,ToastsBoard_styled_templateObject2,components_Portal=function Portal(props){var node=function usePortal(){var _useState=(0,react.useState)(document.createElement("div")),node=(0,slicedToArray.Z)(_useState,1)[0];return(0,react.useEffect)((function(){return node.setAttribute("id","toasts-id"),node.style="height: 100%; width: 100%;",document.querySelector("#toasts-board").appendChild(node),function(){return document.querySelector("#toasts-id").remove()}}),[node]),node}();return(0,react_dom.createPortal)(props.children,node)},ToastsBoardWrapper=styled_components_browser_esm.ZP.div(ToastsBoard_styled_templateObject||(ToastsBoard_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: block;\n  height: 75vh;\n"]))),ToastsBoardButton=styled_components_browser_esm.ZP.button(ToastsBoard_styled_templateObject2||(ToastsBoard_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  padding: 10px 20px;\n  border-radius: 10px;\n  background: #786576;\n  border: 1px solid #786576;\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n"])));function ToastsBoard(props){return(0,jsx_runtime.jsx)(components_ErrorBoundary,{children:(0,jsx_runtime.jsxs)(ToastsBoardWrapper,{id:"toasts-board",children:[(0,jsx_runtime.jsx)(ToastsBoardButton,{onClick:function onAddToast(){toast.addToast(props)},children:"Add toast"}),(0,jsx_runtime.jsx)(components_Portal,{children:(0,jsx_runtime.jsx)(components_ToastsList,{})})]})})}ToastsBoard.__docgenInfo={description:"",methods:[],displayName:"ToastsBoard",props:{animation:{description:"",type:{name:"string"},required:!1},bgcolor:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1},delay:{description:"",type:{name:"number"},required:!1},id:{description:"",type:{name:"number"},required:!1},padding:{description:"",type:{name:"number"},required:!1},position:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},type:{description:"",type:{name:"string"},required:!1}}};var components_ToastsBoard=ToastsBoard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastsBoard/index.jsx"]={name:"ToastsBoard",docgenInfo:ToastsBoard.__docgenInfo,path:"src/components/ToastsBoard/index.jsx"});var Toast_stories={title:"Board",component:components_ToastsBoard,argTypes:{animation:{options:["slide","fade"],control:{type:"radio"}},position:{options:(0,toConsumableArray.Z)(["top-left","top-right","bottom-left","bottom-right"]),control:{type:"radio"}},type:{options:(0,toConsumableArray.Z)(["info","warning","error","success"]),control:{type:"radio"}},color:{control:{type:"color"}},bgcolor:{control:{type:"color"}}}};var Board=function Template(args){return(0,jsx_runtime.jsx)(components_ToastsBoard,(0,objectSpread2.Z)({},args))}.bind({});Board.args={id:0,title:"title",position:"top-left",animation:"slide",type:"info",color:"#FFF",bgcolor:"#000",delay:0,padding:35},Board.parameters=(0,objectSpread2.Z)({storySource:{source:"Template.bind({})"}},Board.parameters);var __namedExportsOrder=["Board"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Toast.stories.js":"./src/stories/Toast.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[847],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);