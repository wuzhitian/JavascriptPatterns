// 全数组向后移一位
// var array = [1,2,3,4,5];
// for(var i=array.length;i>0;i--) array[i]=array[i-1];
// console.log(array);	//[ 1, 1, 2, 3, 4, 5 ]

var cat = '{"name": "fido", "dob": new Function("new Date()")(), "legs": "[1, 2, 3, 4]" }';
console.log(JSON.parse(cat));
console.log()

var dog = {
	name: "fido", 
	dob: new Date(),
	legs: [1, 2, 3, 4]  
};
var jsonstr = JSON.stringify(dog);
console.log(jsonstr);	//{"name":"fido","dob":"2014-07-31T16:32:44.105Z","legs":[1,2,3,4]};
console.log(typeof jsonstr);	//string