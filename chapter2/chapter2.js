//P15 全局变量问题
// ********************************************************//
// function aa (){
// 	var a = b = 0;
// }
// aa();
// console.log(b);    	// 0;   这缘于从右至左的操作付优先级。首先优先级较高的是表达式b=0，此时b未经声明，这等同于 var a = (b = 0);
// console.log(a);		// a is not defined;

// function dd (){
// 	var c, d;
// 	c = d = 0;
// }
// dd();
// console.log(c);		// c is not defined;
// console.log(d);		// d is not defined;
// ********************************************************//
// 
// P16 变量释放是的副作用
// ********************************************************//
// 1. 使用var创建的全局变量不能删除;
// 2. 不使用var创建的隐含全局变量可以删除;
// 这表明隐含全局变量严格来讲不是真正的变量，而是全局对象的属性。属性可以通过delete操作符删除，但变量不可以;
// var global_var = 1;
// global_novar = 2;
// (function(){
// 	global_fromfunc = 3;
// })();
// console.log(delete global_var);			//false;
// console.log(delete global_novar);		//true;
// console.log(delete global_fromfunc);	//true;

// console.log(typeof global_var);			//number;
// console.log(typeof global_novar);		//undefined;
// console.log(typeof global_fromfunc);	//undefined;


// ********************************************************//


// P17
// ********************************************************//
// Javascript 允许在函数的任意位置声明多个变量，在相同的作用域内，无论在哪里声明，效果都等同于在函数的顶部进行声明，哪怕在变量声明前就使用;
// myname = "global";
// (function(){
//  console.log(myname);    //undefined
//  var myname = "local";
//  console.log(myname);    //local
// })();
// 上面代码相当于
// myname = "global";
// (function(){
//  var myname;
//  console.log(myname);    //undefined
//  myname = "local";
//  console.log(myname);    //local
// })();
// console.log(myname);
// 
// ********************************************************//

//P19
//遍历数组或类数组对象，缓存其长度，有助于提高代码性能，尤其是DOM遍历       for(var i=array.length-1;i>=0 i--){}
// var arrayTest = [];
// for(var i = 0; i < 50000000; i ++){
//  arrayTest.push(i);
// };
// var a = 0;
// console.time("time1");
// for(var i = 0; i < arrayTest.length; i++){
//  a = a + i;
// }
// console.timeEnd("time1");


// var b = 0;
// console.time("time2");
// for(var i = 0, m = arrayTest.length; i < m; i++){
//  b = b + i;
// }
// console.timeEnd("time2");

// var c = 0;
// console.time("time3")
// for(var i = arrayTest.length; i > 0; i--){
//  c = c + i;
// }
// console.timeEnd("time3");

// var d = 0; 
// console.time("time4");
// var n = arrayTest.length;
// while(n--){
//  d += n;
// }
// console.timeEnd("time4");

//全数组向后移一位
// var array = [1,2,3,4,5];
// for(var i=array.length;i>0;i--) array[i]=array[i-1];

//DOM遍历测试代码
// console.time("time1");
// for (var j = 0; j < 1000; j++) {
//  for (var i = 0; i < document.body.children.length; i++) {
//  }
// }
// console.timeEnd("time1")

// console.time("time2");
// for (var j = 0; j < 1000; j++) {
//  for (var i = 0, m = document.body.children.length; i < m; i++) {
//  }
// }
// console.timeEnd("time2")

//P21   当遍历对象属性
// var man = {
// 	a: 1,
// 	b: 2, 
// 	c: 3 
// };
// if (typeof Object.prototype.clone === "undefined") {
// 	Object.prototype.clone = function () {};
// }
// for (var n in man){
// 	console.log(n +":"+ man[n]);
// };
// for (var n in man){
// 	if(man.hasOwnProperty(n)){
// 		console.log(n, ":", man[n]);
// 	};
// };
// for (var i in man){
// 	if(Object.prototype.hasOwnProperty.call(man, i)){
// 		console.log(i, ":", man[i]);
// 	};
// };
// var i, hasOwn = Object.prototype.hasOwnProperty;
// for(i in man){
// 	if(hasOwn.call(man, i))
// 	console.log(i, ":", man[i]);
// };

/**
 * P26 慎用eval(), 如果要使用eval(), 可以考虑使用new Function();来代替；这样做的一个潜在好处是由于在new Function();中的代码将在局部函数空间中运行，因此代码中任何采用var定义的变量不会自动成为全局变量
 */
// console.log(typeof un);		//undefined;
// console.log(typeof deux);	//undefined
// console.log(typeof trois);	//undefined

// var jsstring = "var un = 1; console.log(un);";
// eval(jsstring);		//logs "1";

// jsstring = "var deux = 2; console.log(deux);";
// new Function(jsstring)();	//logs "2";

// jsstring = "var trois = 3; console.log(trois);";
// (function(){
// 	eval(jsstring);		//logs "3";
// })();
// console.log(typeof un);		//"number;
// console.log(typeof deux);	//undefined;
// console.log(typeof trois);	//undefined;

//P35 YUIDoc
/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method methodName
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra, optional work
* @return {Boolean} Returns true on success
*/



// console.log(parseInt(09))



//浏览器控制台运行
// function Waffle(name) {
// 	this.name = name;
// }

// var aa = new Waffle("aa");
// console.log(aa.name);		//"aa";

// bb = Waffle("bb");
// console.log(typeof bb);		//"undefined";
// console.log(name);			//"bb"
// console.log(window.tastes)	//"yummy";



//
// var Person = function (name) {
// 	//使用字面量模式创建一个对象
// 	// var this = {};
// 	//向this添加属性和方法
// 	this.name = name;
// 	this.say = function () {
// 		console.log(this.name);
// 	}
// 	// return this;
// }
// var smith = new Person ("smith");
// console.log(smith.name);
// var cat = '{"name": "fido", "dob": "test", "legs": "[1, 2, 3, 4]" }';
// var str2json = JSON.parse(cat);		//{ name: 'fido', dob: 'test', legs: '[1, 2, 3, 4]' };
// console.log(str2json);				//object
// console.log(typeof str2json);

// var dog = {
// 	name: "fido", 
// 	dob: "test",
// 	legs: [1, 2, 3, 4]  
// };
// var json2str = JSON.stringify(dog);
// console.log(json2str);				//{"name":"fido","dob":"2014-07-31T16:32:44.105Z","legs":[1,2,3,4]};
// console.log(typeof json2str);		//string
