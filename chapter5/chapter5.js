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
// Gadget.prototype = (function(){
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
