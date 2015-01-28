//P62 函数的命名属性
// ********************************************************//
// function foo(){}			//声明
// var bar = function() {};	//表达式, 匿名函数
// var baz = function baz(){}; //命名表达式
// console.log(foo.name)		//"foo"
// console.log(bar.name)		//""
// console.log(baz.name)		//"baz"
// ********************************************************//
// 
// P63 函数的提升
// ********************************************************//
// 1.与变量相像，函数无论在函数体内何处定义，函数都会被提升到函数体顶部（函数表达式除外）;
// function foo(){
// 	console.log('global foo');
// }
// function bar(){
// 	console.log('global bar');
// }
// function hoistMe(){			//报错
// 	console.log(typeof foo);	//'function'
// 	console.log(typeof bar);	//'undefined'

// 	foo();						//'local foo'
// 	bar();						//报错“undefined is not a function”
// 	function foo(){				
// 		console.log('local foo');
// 	}
// 	var bar = function(){		
// 		console.log('local bar');
// 	}
// }
// hoistMe();
// 
// function hoistMe(){				//修改
// 	var bar;
// 	console.log(typeof foo);	//'function'
// 	console.log(typeof bar);	//'undefined'
// 	bar = function(){		
// 		console.log('local bar');
// 	}
// 	foo();						//'local foo'
// 	bar();						//'local bar'
// 	function foo(){				
// 		console.log('local foo');
// 	}
// }
// hoistMe();
// ********************************************************//
// 
// P70 自定义函数
// ********************************************************//
// var scareMe = function (){
// 	console.log("1111");
// 	scareMe = function(){
// 		console.log("2222");
// 	}
// };
// // scareMe();		//"1111"
// // scareMe();		//"2222"
// //
// scareMe.property = 'properly';
// var prank = scareMe;
// var spooky = {
// 	boo: scareMe
// };
// prank();		//"1111"
// prank();		//"1111"
// console.log(prank.property);	//"properly"

// spooky.boo();	//"1111"
// spooky.boo();	//"1111"
// console.log(spooky.boo.property);	//"properly"

// scareMe();		//"2222"
// scareMe();		//"2222"
// console.log(scareMe.property);		//"undefined"
// 每次当调用prank()时，它都log“1111”，同时它还覆盖了全局scareMe()，但是prank()自身保持了可见旧函数，其中还包括属性。当该函数以spooky对象的boo()方法使用时，也发生了同样的情况。所有这些调用不断地重写全局scareMe()指针，以至于当他最终被调用时，它才第一次具有更新函数主题并log"2222"消息的权利。此外，它也不能访问scareMe.property属性。
// ********************************************************//
// 
// P74 即时函数的返回值
// ********************************************************//
// var o = {
// 	message: (function(){
// 		var who = "me", what = "call ";
// 		return what + who;
// 	}()),
// 	message0: (function(){
// 		var who = "meeeeeeeeee", what = "call ";
// 		return what + who;
// 	})(),
// 	getMsg: function(){
// 		return this.message;
// 	},
// 	getMsg0: function(){
// 		return this.message0;
// 	}
// }
// console.log(o.message);
// console.log(o.message0);
// console.log(o.getMsg());
// console.log(o.getMsg0());
// ********************************************************//
// 
// P75 即时对象初始化
// ********************************************************//
// ({
// 	width: 100,
// 	height: 200,
// 	getArea: function(){
// 		return this.width * this.height;
// 	},
// 	init: function(){
// 		console.log(this.getArea());
// 	}
// }).init();	//20000

// var rectangle0 = ({
// 	width: 300,
// 	height: 400,
// 	getArea: function(){
// 		return this.width * this.height;
// 	},
// 	init: function(){
// 		console.log(this.getArea());
// 		return this;
// 	}
// }).init();	//120000
// rectangle0.width = 500;
// rectangle0.init();	//20000
// ********************************************************//
// 
// P77 初始化时进行分支
// ********************************************************//
// 初始化utils时对浏览器进行嗅探，之后调用时，不用再嗅探浏览器
// 
// var utils = {
// 	addListener: null,
// 	removeListener: null
// };
// if(typeof window.addEventListener == 'function'){
// 	utils.addListener = function(el, type, fn){
// 		el.addEventListener(type, fn, false);
// 	};
// 	utils.removeListener = function(el, type, fn){
// 		el.removeEventListener(type, fn, false);
// 	};
// }else if(typeof document.attachEvent === 'function'){
// 	utils.addListener = function(el, type, fn){
// 		el.attachEvent('on'+type, fn);
// 	};
// 	utils.removeListener = function(el, type, fn){
// 		el.detachEvent('on'+type, fn);
// 	};
// }else{
// 	utils.addListener = function(el, type, fn){
// 		el['on'+type] = fn;
// 	};
// 	utils.removeListener = function(el, type, fn){
// 		el['on'+type] = null;
// 	};
// }
// ********************************************************//
//
//P78 函数属性 —— 备忘模式
// ********************************************************//
// function func(a, b, c){}
// console.log(func.length);	//3;  该函数期望的参数的数量

// var myFunc = function(param){
// 	// myFunc.cache = {};		//如果myFunc.cache定义在这里，tag1调用时:  Cannot read property 'aaaBB' of undefined
// 	if(!myFunc.cache[param]){
// 		var result = param + param;
// 		myFunc.cache[param] = result;
// 	}
// }
// myFunc.cache = {};						//如果myFunc.cache定义在这里，tag1调用时: undefined
// console.log(myFunc.cache["aaaBB"]);		//tag:1; undefined
// myFunc("aaaBB")
// console.log(myFunc.cache["aaaBB"]);		//"aaaBBaaaBB";
// var bb = myFunc("gghh");
// console.log(bb);						//"undefined";因为函数没有返回值
// console.log(myFunc.cache['gghh']);		//"gghhgghh";

// function myFunc1(param){
// 	if(!myFunc1.cache[param]){
// 		var result = param + param;
// 		myFunc1.cache[param] = result;
// 	}
// }
// myFunc1.cache = {};
// myFunc1("myFunc1");
// console.log(myFunc1.cache);

// function myFunc2(a, b, c){
// 	var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)), result;
// 	// call方法: 
// 	// 语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
// 	// 定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
// 	// 说明： 
// 	// call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
// 	// 如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
// 	// 
// 	// apply方法： 
// 	// 语法：apply([thisObj[,argArray]]) 
// 	// 定义：应用某一对象的一个方法，用另一个对象替换当前对象。 
// 	// 说明： 
// 	// 如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。 
// 	// 如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。
// 	if(!myFunc2.cache[cacheKey]){
// 		result = arguments;
// 		myFunc2.cache[cacheKey] = result;
// 	}
// }
// myFunc2.cache = {};
// myFunc2("aa", "bb", "ccc");
// console.log(myFunc2.cache);
// console.log(myFunc2.cache['["aa","bb","ccc"]']);
// 
// 
// ********************************************************//
// 
// P84 函数Curry化
// ********************************************************//

// ********************************************************//
