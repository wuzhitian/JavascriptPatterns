function aa (){
	var a = b = 0;
}
aa();
console.log(b);    	// 0;   这缘于从右至左的操作付优先级。首先优先级较高的是表达式b=0，此时b未经声明。
// console.log(a);		// a is not defined;

function dd (){
	var c, d;
	c = d = 0;
}
dd();
// console.log(c);		// c is not defined;
// console.log(d);		// d is not defined;