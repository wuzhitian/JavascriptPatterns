// var aaa = function(){};
// aaa.bb = "aa";
// console.dir(Object.getOwnPropertyNames(Array.prototype));

// var arg = [1, 3, 4];
// console.log(Object.prototype.toString.call(arg));

// var global_var = 1;
//     global_novar = 2;
//     (function () {
//         global_fromfunc = 3;
//     })();

//     console.log(delete global_var);         //false;
//     console.log(delete global_novar);       //true;
//     console.log(delete global_fromfunc);    //true;

//     console.log(typeof global_var);         //"number";
//     console.log(typeof global_novar);       //"undefined";
//     console.log(typeof global_fromfunc);    //"undefined";

// var myName = "global";
// (function func() {
//     var myName;             // -> var myName = undefined;
//     console.log(myName);    //"undefined";
//     myName = "local";
//     console.log(myName);    //"local";
// })();

// console.time("time1");
// for (var j = 0; j < 100; j++) {
//     for (var i = 0; i < document.body.children.length; i++) {
//         var rst = 20 / 4;
//     }
// }
// console.timeEnd("time1")

// console.time("time2");
// for (var j = 0; j < 100; j++) {
//     for (var i = 0, m = document.body.children.length; i < m; i++) {
//         var rst = 20 / 4;
//     }
// }
// console.timeEnd("time2");

// var myArray = [1,2,3,4];
// for(var i = myArray.length; i > 0; i++){
//     myArray[i] = myArray[i - 1];        
// }
// console.log(myArray)    //[1, 1, 2, 3, 4]

// try {
//     adddlert("Welcome guest!");
// }
// catch (err) {
//     txt="There was an error on this page.\n\n";
//     txt+="Error description: " + err.message + "\n\n";
//     txt+="Click OK to continue.\n\n";
//     console.log(txt);
// }
