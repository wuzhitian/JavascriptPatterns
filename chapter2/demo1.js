var arrayTest = [];
for(var i = 0; i < 50000000; i ++){
	arrayTest.push(i);
};
var a = 0;
console.time("time1");
for(var i = 0; i < arrayTest.length; i++){
	a = a + i;
}
console.timeEnd("time1");


var b = 0;
console.time("time2");
for(var i = 0, m = arrayTest.length; i < m; i++){
	b = b + i;
}
console.timeEnd("time2");

var c = 0;
console.time("time3")
var i;
for(i = arrayTest.length; i > 0; i--){
	c = c + i;
}
console.timeEnd("time3");