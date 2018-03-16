

/** 
 * JavaScript 是一门解释型的语言 动态语言
 *
 * JavaScript 是弱类型的，它的数据类型无需在声明时指定，解释 器会根据上下文对变量进行实例化
 * JavaScript 的变量更像是一个容器，类似与 Java 语言中的顶层对象 Object，它可 以是任何类型，解释器会根据上下文自动对其造型。
 *  
 *解释型的语言有一定的好处，即可以随时修改代码，无需编译，刷新页面即可重新解释， 可以实时看到程序的结果，但是由于每一次都需要解释，程序的开销较大；
 *而编译型的语言则仅需要编译一次，每次都运行编译过的代码即可，但是又丧失了动态性
 *
 *在 JavaScript 中，包含六种基本的数据类型，字符串(string)，数值(number)，布尔值(boolean)，undefined，null 及对象(object)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
*/

function showMessage() {
	var str = "Hello, world";//字符串
	var i = 10;//整型数
	var f = 2.3;//浮点数
	var b = true;//布尔值

	var obj = new Object();//对象类型
	obj.str = str;
	obj.num = 2.3

	alert(str);
	alert(i);
	alert(f);
	alert(b);

	//typeof  数据类型  instanceof
	alert(typeof str);
	alert(typeof i);
	alert(typeof f);
	alert(typeof b);
	alert(typeof x);



	var x = 3;
	var y = x + "2";// => 32
	var z = x + 2;// => 5
}




//但是，typeof 并不总是有效的，比如下面这种情况： 运行结果显示，对象 obj 和数组 array 的 typeof 值均为”object”，

function test_typeofAnd_instanceof() {
	var obj = {};
	var array = ["one", "two", "three", "four"];

	alert(typeof obj);//object
	alert(typeof array); //object
	alert(obj instanceof Array);//false
	alert(array instanceof Array);//true

}

function handleMessage(message, handle){
	if(typeof handle == "function"){
		return handle(message);
	}else{
		throw new Error("the 2nd argument should be a function");
	}
}


/**
*相等运算符: ==
 null 和 undefined 相等
 其中一个是数字，另一个是字符串，则将字符串转换为数字，在做比较
 其中一个是 true，先转换成 1(false 则转换为 0)在做比较
 如果一个值是对象，另一个是数字/字符串，则将对象转换为原始值(通过 toString()或者 valueOf()方法)
 其他情况，则直接返回 false

*等同运算符: ===
 都是数字的情况，如果值相同，则两者等同(有一个例外，就是 NaN，NaN 与其本身也不相等)，否则不等同
 都是字符串的情况，与其他程序设计语言一样，如果串的值不等，则不等同，否则等同
 都是布尔值，且值均为 true/false，则等同，否则不等同
 如果两个操作数均为 null/undefined，则等同，否则不等同
 */
var obj1 = {
id : "self",
name : "object",
toString : function(){
return "object 1";
}
}
var obj2 = "object 1";

console.log(obj1 == obj2);//true
console.log(obj1 === obj2);//false




/**
JSON 全称为 JavaScript 对象表示法(JavaScript Object Notation)，即通过字面量来表 示一个对象，从简单到复杂均可使用此方式。比如：
*/
var obj = {
	name : "abruzzi",
	age : 26,
	birthday : new Date(1984, 4, 5),
	addr : {
	street : "Huang Quan Road",
	xno : "135"
	}
}



/**
JSON 的另一个应用场景是：当一个函数拥有多个返回值时，在传统的面向对象语言中，我们需要组织一个对象，然后返回，而 JavaScript 则完全不需要这么麻烦，比如：
*/
function point(left, top){
	this.left = left;
	this.top = top;

	//handle the left and top
	return {x: this.left, y:this.top};
}
//直接动态的构建一个新的匿名对象返回即可：
var pos = point(3, 4);
pos.x = 3;
pos.y = 4;



/**
在 JavaScript 中，函数的参数是比较有意思的，比如，你可以将任意多的参数传递给一个函数，即使这个函数声明时并未制定形式参数，比如：
在调用的时候，我们可以按顺序传递给 adconsole.log 一个参数，两个参数，或者三个参数(甚至可以传递给它多于 3 个，没有关系)
*/
function adconsole.log(str, len, option){
	var s = str || "default";
	var l = len || s.length;
	var o = option || "i";

	s = s.substring(0, l);
	switch(o){
	case "u":s = s.toUpperCase();
	break;
	case "l":s = s.toLowerCase();
	break;
	default:
	break;
}
console.log(s);
}
adconsole.log("Hello, world");
adconsole.log("Hello, world", 5);
adconsole.log("Hello, world", 5, "l");//lower case
adconsole.log("Hello, world", 5, "u");//upper case
adconsole.log("Hello, world", 5, "u",1,2,3);//upper case


/**
事实上，JavaScript 在处理函数的参数时，与其他编译型的语言不一样，解释器传递给函 数的是一个类似于数组的内部值，叫 arguments，这个在函数对象生成的时候就被初始化了。
比如我们传递给 adconsole.log 一个参数的情况下，其他两个参数分别为 undefined.这样，我们可以才 adconsole.log 函数内部处理那些 undefined 参数，从而可以向外部公开：我们可以处理任意参数
*/
function sum(){
	var result = 0;
	for(var i = 0, len = arguments.length; i < len; i++){
		var current = arguments[i];
		if(isNaN(current)){
			throw new Error("not a number exception");
		}else{
			result += current;
		}
	}
	return result;
}
console.log(sum(10, 20, 30, 40, 50));
console.log(sum(4, 8, 15, 16, 23, 42));
//console.log(sum("new"));//将抛出异常 throw new Error("not a number exception");


/**
JavaScript 的函数是在局部作用域内运行的，在局部作用域内运行的函数体可以访问其外层的(可能是全局作用域)的变量和函数。
JavaScript 的作用域为词法作用域，所谓词法作用域是说，其作用域为在定义时(词法分析时)就确定下来的，而并非在执行时确定，如下例：
运行结果是什么呢？初学者很可能得出这样的答案：

global
local
而正确的结果应该是：

undefined
local

因为在函数 scopeTest 的定义中，预先访问了未声明的变量 str，然后才对 str 变量进行初始化，所以第一个 console.log(str)会返回 undifined 错误。
那为什么函数这个时候不去访问外部的 str 变量呢？这是因为，在词法分析结束后，构造作用域链的时候，会将函数内定义的var 变量放入该链，
因此 str 在整个函数 scopeTest 内都是可见的(从函数体的第一行到最后一行)，由于 str 变量本身是未定义的，程序顺序执行，到第一行就会返回未定义，
第二行为 str 赋值，所以第三行的 console.log(str)将返回”local”。


总结：就是说在函数内 定义 的变量如果和全局变量同名,那么函数类的变量优先级更高
*/

var str = "global";
function scopeTest(){
	console.log(999999, str);//返回 undifined 错误
	var str = "local";
	console.log(str);
}
scopeTest();




/**
call 和 apply 通常用来修改函数的上下文，函数中的 this 指针将被替换为 call 或者 apply的第一个参数，我们不妨来看看例子：
*/

//定义一个人，名字为jack
var jack = {
	name : "jack",
	age : 26
}

//定义另一个人，名字为abruzzi
var abruzzi = {
	name : "abruzzi",
	age : 26
}

//定义一个全局的函数对象
function console.logName(){
	return this.name;
}

//设置console.logName的上下文为jack, 此时的this为jack
console.log(console.logName.call(jack));
//设置console.logName的上下文为abruzzi,此时的this为abruzzi
console.log(console.logName.call(abruzzi));

console.log(console.logName.apply(jack));
console.log(console.logName.apply(abruzzi));



/**
只有一个参数的时候 call 和 apply 的使用方式是一样的，如果有多个参数：
apply 的第二个参数为一个函数需要的参数组成的一个数组，而 call 则需要跟若干个参数，参数之间以逗号(,)隔开即可

得到的结果为：

Jack Sept.
John Abruzzi
*/
function setName (name) {
	this.name = name;
}
setName.apply(jack, ["Jack Sept."]);
console.log(console.logName.apply(jack));

setName.call(abruzzi, "John Abruzzi");
console.log(console.logName.call(abruzzi));


 



