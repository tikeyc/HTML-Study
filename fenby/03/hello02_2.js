

/**柯里化的概念
 *
 * 闭包的我们之前已经接触到，先说说柯里化。柯里化就是预先将函数的某些参数传入，得到一个简单的函数，但是预先传入的参数被保存在闭包中，因此会有一些奇特的特性。比如：
 */

var adder = function(num){ 
	return function(y){
		return num + y; 
	}
}
var inc = adder(1);
var dec = adder(-1);
console.log(inc(100));
console.log(dec(100));
console.log(adder(2)(100));



var mapped = [1, 2, 3, 4, 5].map(function(x){return x * 2}); 
console.log(mapped);



/**
 * JavaScript 对象是一个属性的集合，另外有一个隐式的对象：原型对象。原型的值可以是一个对象或者 null。一般的引擎实现中,JS 对象会包含若干个隐 藏属性，
 * 对象的原型由这些隐藏属性之一引用，我们在本文中讨论时，将假定这个属性的名 称为"__proto__"(事实上，SpiderMonkey 内部正是使用了这个名称，但是规范中并未做要求，因此这个名称依赖于实现)
 * 
 * 由于原型对象本身也是对象，根据上边的定义，它也有自己的原型，而它自己的原型对象又可以有自己的原型，这样就组成了一条链，这个链就是原型链
 * JavaScritp 引擎在访问对象的属性时，如果在对象本身中没有找到，则会去原型链中查找，如果找到,直接返回值，如果整个链都遍历且没有找到属性，
 * 则返回 undefined.原 型链一般实现为一个链表，这样就可以按照一定的顺序来查找
 * 
var base = {
name : "base",
getInfo : function(){
return this.id + ":" + this.name;
} 
}

var ext1 = { 
id : 0,
    __proto__ : base
}

print(ext1.getInfo());
 */

var base = {
	name : "base",
	getInfo : function(){ 
		return this.name;
	} 
}
var ext1 = { 
	id : 0,
    name : "ext1",
    __proto__ : base
}

console.log(ext1.id); 
console.log(ext1.getInfo());







