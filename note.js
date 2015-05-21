// 全数组向后移一位
// var array = [1,2,3,4,5];
// for(var i=array.length;i>0;i--) array[i]=array[i-1];
// console.log(array);	//[ 1, 1, 2, 3, 4, 5 ]

// var cat = '{"name": "fido", "dob": new Function("new Date()")(), "legs": "[1, 2, 3, 4]" }';
// console.log(JSON.parse(cat));
// console.log()

// var dog = {
// 	name: "fido", 
// 	dob: new Date(),
// 	legs: [1, 2, 3, 4]  
// };
// var jsonstr = JSON.stringify(dog);
// console.log(jsonstr);	//{"name":"fido","dob":"2014-07-31T16:32:44.105Z","legs":[1,2,3,4]};
// console.log(typeof jsonstr);	//string


//其实很简单，将像arguments那种的类数组对象转换为数组的形式。
// function curry(){

//     console.log('arguments:'+arguments);
//     console.log('typeof arguments:'+typeof arguments);
//     console.log('arguments instanceof Array:'+(arguments instanceof Array));
//     var args = Array.prototype.slice.call(arguments,0);
//     console.log('args:'+args);
//     console.log('typeof args:'+typeof args);
//     console.log('args instanceof Array:'+(args instanceof Array));
                
// }

// curry("s","a","d");
// var a = function(){
//      console.log(this);    // 'littledu'
//      console.log(typeof this);      //  Object
//      console.log(this instanceof String);    // true
// }
// a.call(123);

