//P91  通用命名空间函数
// ********************************************************//
// var MYAPP = MYAPP || {};
// MYAPP.namespace = function(ns_string){
// 	var parent = MYAPP, parts = ns_string.split(".");
// 	if(parts[0] === "MYAPP"){
// 		parts = parts.slice(1);
// 	}
// 	for(var i = 0; i< parts.length; i++){
// 		if(typeof parent[parts[i]] === "undefined"){
// 			parent[parts[i]] = {};
// 		}
// 		parent = parent[parts[i]];
// 	}
// 	return parent;
// };
// var module2 = MYAPP.namespace("MYAPP.modules.module0");
// console.log(MYAPP);		//{ namespace: [Function], modules: { module0: {} } }
// ********************************************************//
// 
// P95 私有属性失效
// ********************************************************//
// function AAA(name){
// 	console.log(this);
// 	this.name = name;
// 	return this;
// }
// var aa = new AAA("bb");
// console.log(aa);

// function Gadget(){
// 	var specs = {
// 		width: 200,
// 		heigth: 300
// 	};
// 	this.getSpecs = function(){
// 		return specs;	//暴露了私有属性
// 	}
// }
// var bbb = new Gadget();
// var bbbSpecs = bbb.getSpecs();
// console.log(bbbSpecs);		//{ width: 200, heigth: 300 }
// bbbSpecs.width = 400;
// var cccSpecs = bbb.getSpecs();
// console.log(cccSpecs);		//{ width: 400, heigth: 300 }; 改变了bbb的私有属性
// ********************************************************//
//
//P97 对象字面量以及私有性
// ********************************************************//
// var myObj0;
// (function(){
// 	var name = "myObj0";
// 	myObj0 = {		//直接赋值到变量
// 		getName: function(){
// 			console.log(name);
// 		}
// 	}
// })();
// myObj0.getName();		//myObj0
// var myObj1 = (function(){
// 	var name = "myObj1";
// 	return {		//作为函数返回值
// 		getName: function(){
// 			console.log(name);
// 		}
// 	}
// })();
// myObj1.getName();		//myObj1
// ********************************************************//
// 
// P97 原型和私有性
// ********************************************************//
// function Gadget(name){
// 	var name = name;
// 	this.getName = function(){
// 		console.log(name);
// 	}
// }
// Gadget.prototype = (function(){		//prototype对象为引用类型，字面量重写时要格外注意。字面量重写会将prototype彻底指向另一个对象
// 	var browser0 = "ffffox";
// 	return {
// 		getBrowser: function(){
// 			console.log(browser0);
// 		}
// 	}
// })();
// var toy = new Gadget("toy");
// toy.getName();					//toy
// toy.getBrowser();				//ffffox
// console.log(toy.constructor.name);	//Object
// toy.constructor.prototype.getBrowser = function(){
// 	console.log("YYYYYYYYYYYYY");
// }
// toy.getBrowser();				//ffffox
// var kkey = new Gadget("kkey");
// toy.getBrowser();				//ffffox
// ********************************************************//
//
//P98 将私有方法揭示为 公共方法
// ********************************************************//
// var myArray;
// (function(){
// 	function isArray(a){
// 		return Object.prototype.toString.call(a) == "[object Array]";
// 	}
// 	function indexOf(haystack, needle){
// 		var max = haystack.length;
// 		for(var i = 0; i < max; i++){
// 			if(haystack[i] === needle){
// 				return i;
// 			}
// 		}
// 		return -1;
// 	}
// 	myArray = {		//对象引用私有类型变量,即使在外部重写了键名指向，也不会改变键名原指向的方法
// 		isArray: isArray
// 		,indexOf: indexOf
// 		,inArray: indexOf
// 	}
// }());
// console.log(myArray.isArray([1,2]));					//true
// console.log(myArray.isArray({0:1}));					//false
// console.log(myArray.indexOf(["a", "b", "z"], "z"));		//2
// console.log(myArray.inArray(["a", "b", "z"], "z"));		//2

// myArray.indexOf = null;
// console.log(myArray.inArray(["a", "b", "z"], "z"));		//2
// ********************************************************//
// 
// P99 模块模式			在局部作用域内声明，封装对象，将对象当函数执行结果返回赋值给变量
// ********************************************************//
// var MYAPP = {};
// MYAPP.namespace = function(str){
// 	var tempArr = str.split(".");
// 	var parent = MYAPP;
// 	var i = tempArr[0] == "MYAPP"? 1 : 0;
// 	for(; i < tempArr.length; i++){
// 		if(typeof parent[tempArr[i]] == "undefined"){	//
// 			parent[tempArr[i]] = {};
// 		}
// 		parent = parent[tempArr[i]];
// 	}
// 	return parent;
// }
// MYAPP.namespace('MYAPP.utilities.array');
// MYAPP.utilities.array = (function(){
// 	var array_string = "[object Array]";
// 	var ops = Object.prototype.toString;
// 	return {
// 		inArray: function(needle, haystack){
// 			for(var i = 0; max = haystack.length; i < max; i++){
// 				if(haystack[i] === needle){
// 					return true;
// 				}
// 			}
// 		}
// 		,isArray: function(a){
// 			return ops.call(a) === array_string;
// 		}
// 	}
// }());
// ********************************************************//
// 
// P101 揭示模块模式		//类似于“将私有方法揭示为公共方法”
// ********************************************************//
// var MYAPP = {};
// MYAPP.namespace = function(str){
// 	var tempArr = str.split('.');
// 	var parent = MYAPP;
// 	var i = tempArr[0] == "MYAPP" ? 1 : 0;
// 	for(; i < tempArr.length; i++){
// 		if(typeof parent[tempArr[i]] == "undefined"){
// 			parent[tempArr[i]] = {};
// 		}
// 		parent = parent[tempArr[i]];
// 	}
// 	return parent;
// }

// MYAPP.utilities.array = (function(){
// 	//私有属性
// 	var array_string = "[object Array]";
// 	var ops = Object.prototype.toString;
// 	var inArray = function(haystack, needle){
// 		for(var i = 0; i < haystack.length; i++){
// 			if(haystack[i] === needle){
// 				return i;
// 			}
// 		}
// 		return -1;
// 	};
// 	var isArray = function(a){
// 		return ops.call(a) === array_string;
// 	};
// 	return {
// 		isArray: isArray
// 		,indexOf: inArray
// 	};
// }());
// ********************************************************//
// 
// P102 创建构造函数的模块
// ********************************************************//
// var MYAPP = {};
// MYAPP.namespace = function(str){
// 	var tempArr = str.split(".");
// 	var parent = MYAPP;
// 	var i = tempArr[0] == "MYAPP" ? 1 : 0;
// 	for(; i < tempArr.length; i++){
// 		if(typeof parent[tempArr[i]] == 'undefined'){
// 			parent[tempArr[i]] = {}
// 		}
// 		parent = parent[tempArr[]i];
// 	}
// 	return parent;
// }

// MYAPP.namespace('MYAPP.utilities.Array');
// MYAPP.utilities.Array = (function(){
// 	//依赖
// 	var uobj = MYAPP.utilities.object;
// 	var ulang = MYAPP.utilities.lang;
// 	var Constr = function(o){
// 		this.elements = this.toArray(o);
// 	};
// 	Constr.prototype = {
// 		constructor: MYAPP.utilities.Array,
// 		toArray: function(obj){
// 			var a = [];
// 			for(var i = 0; i < obj.length; i++){
// 				a[i] = obj[i];
// 			}
// 			return a;
// 		}
// 	};
// 	//返回要分配给新命名空间的构造函数
// 	return Constr;
// }());
// ********************************************************//
// 
// P106 沙箱模式 实现构造函数				???没看懂,不知道说的是啥???
// ********************************************************//
// function Sandbox(){
// 	//将参数转换成一个数组
// 	var args = Array.prototype.slice.call(arguments);
// 	//最后一个参数是回调函数
// 	var callback = args.pop();
// 	//模块可以作为一个数组传递，或作为单独的参数传递,
// 	var modules = (args[0] && typeof args[0] === "string") ? args : args[0];
// 	var i;
// 	//确保该函数作为构造函数被调用
// 	if(!(this instanceof Sandbox)){
// 		return new Sandbox(modules, callback);
// 	}
// 	//需要向'this'添加的属性
// 	this.a = 1;
// 	this.b = 2;
// 	//现在向该核心'this'对象添加模块
// 	//不指定模块名称或指定'*'都表示"使用所有模块"
// 	if(!modules || modules === '*'){
// 		modules = [];
// 		for(i in Sandbox.modules){
// 			if(Sandbox.modules.hasOwnProperty(i)){
// 				modules.push(i);
// 			}
// 		}
// 	}
// 	//初始化所需的模块
// 	for( i = 0; i < modules.length; i++){
// 		Sandbox.modules[modules[i]](this);
// 	}
// 	callback(this);
// }
// //需要的任何原型属性
// Sandbox.prototype = {
// 	name: "My Application"
// 	,version: "1.0"
// 	,getName: function(){
// 		return this.name;
// 	}
// }
// ********************************************************//
// 
// 
// ********************************************************//
// ********************************************************//

