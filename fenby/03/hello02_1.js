/**
 *函数式语言的特点如下：
 *函数为第一等的元素，即人们常说的一等公民。就是说，在函数式编程中，函数是不依赖于其他对象而独立存在的(对比与 Java，函数必须依赖对象，方法是对象的方法)。
 *函数可以保持自己内部的数据,函数的运算对外部无副作用(修改了外部的全局变量的状态等)，关于函数可以保持自己内部的数据这一特性，称之为闭包
 *
 *用简单的语句来描述 JavaScript 中的闭包的概念：由于 JavaScript 中，函数是对象，对象是属性的集合，而属性的值又可以是对象，则在函数内定义函数成为理所当然，
 *如果在函数 func 内部声明函数 inner，然后在函数外部调用 inner，这个过程即产生了一个闭包
 */

/**我们先来看一个例子，如果不了解 JavaScript 的特性，很难找到原因：
 *运行的结果如何呢？很多初学者可能会得出这样的答案：

    0 
    1
    2 
    3
 问题      
然而，运行这个程序，得到的结果为：

    4
    4 
    4 
    4
    其实,在每次迭代的时候,这样的语句 x.invoke = function(){print(i);}并没有被执行， 只是构建了一个函数体为print(i);的函数对象，如此而已。而当 i=4 时，迭代停止，外部函数返回，
    当再去调用 outter[0].invoke()时，i 的值依旧为 4，因此 outter 数组中的每一个元素的 invoke 都返回 i 的值：4

    如何解决这一问题呢？我们可以声明一个匿名函数，并立即执行它：
 */
var outter = []; 
function clouseTest () {
  var array = ["one", "two", "three", "four"]; 
  for(var i = 0; i < array.length;i++){
    var x = {};
    x.no = i;
    x.text = array[i];

    //结果都为：4
    x.invoke = function (){
    	console.log(i);
    };

	//结果都为：0 1 2 3
    // x.invoke = function (value){
    // 	console.log(i);
    // 	return function () {
    // 		console.log(value); 
    // 	}
    // }(i);
    outter.push(x);
  }
}
//调用这个函数 
clouseTest();

console.log(outter[0].invoke()); 
console.log(outter[1].invoke()); 
console.log(outter[2].invoke()); 
console.log(outter[3].invoke());

/**
 *事实上就是闭包的一种用途，根据前面讲到的内容可知，所有的变量，如果不加上 var 关键字，则默认的会添加到全局对象的属性上去，这样的临时变量加入全 局对象有很多坏处，
 *比如：别的函数可能误用这些变量；造成全局对象过于庞大，影响访问速度(因为变量的取值是需要从原型链上遍历的)。
 *除了每次使用变量都是用 var 关键字外， 我们在实际情况下经常遇到这样一种情况，即有的函数只需要执行一次，其内部变量无需维护，比如 UI 的初始化，那么我们可以使用闭包：
 *
 *我们创建了一个匿名的函数，并立即执行它，由于外部无法引用它内部的变量，因此在执行完后很快就会被释放，最主要的是这种机制不会污染全局对象
 */     
var datamodel = { 
table : [],
tree : {} 
};

(function(dm){

	for(var i = 0; i < dm.table.rows; i++){

		var row = dm.table.rows[i];
		for(var j = 0; j < row.cells; i++){
	        drawCell(i, j);
	    }
	}

    //build dm.tree
    
})(datamodel);

/**
 *设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，那么我们就需要将计算出来的值存储起来，
 *当调用这个函数的时候，首先在缓存中查找，如 果找不到，则进行计算,然后更新缓存并返回值，如果找到了，直接返回查找到的值即可。 
 *闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留
 *
 *这样，当我们第二次调用 CachedSearchBox.attachSerachBox(“input1”)的时候，我 们就可以从缓存中取道该对象，而不用再去创建一个新的 searchbox 对象
 */
var CachedSearchBox = (function(){ 
	var cache = {},
	count = []; 
	return {
		attachSearchBox : function(dsid){ 
			if(dsid in cache){//如果结果在缓存中
				return cache[dsid];//直接返回缓存中的对象 
			}
			var fsb = new uikit.webctrl.SearchBox(dsid);//新建 
			cache[dsid] = fsb;//更新缓存
			if(count.length > 100){//保正缓存的大小<=100
				delete cache[count.shift()]; 
			}
			return fsb; 
		},

		clearSearchBox : function(dsid){ 
			if(dsid in cache){
				cache[dsid].clearSelection(); 
			}
		} 
	};
})(); 

// CachedSearchBox.attachSearchBox("input1");


/**
 * 闭包的另一个重要用途是实现面向对象中的对象，传统的对象语言都提供类的模板机制，这样不同的对象(类的实例)拥有独立的成员及状态，互不干涉。
 * 虽然 JavaScript 中没 有类这样的机制，但是通过使用闭包，我们可以模拟出这样的机制。还是以上边的例子来讲：
 */

function Person(){
	var name = "default";

	return {
		getName : function(){
			return name; 
		},

	    setName : function(newName){ 
	    	name = newName;
	    } 
	}
};

var john = Person(); 
console.log(john.getName()); 
john.setName("john"); 
console.log(john.getName());

var jack = Person(); 
console.log(jack.getName()); 
jack.setName("jack"); 
console.log(jack.getName());


/**
 * 引用是一个比较有意思的主题，JavaScript 中的引用始终指向最终的对象，而并非引用本身，我们来看一个例子：
 */

var obj = {};//空对象 
var ref = obj;//引用

obj.name = "objectA"; 
console.log(ref.name);//ref跟着添加了name属性

obj = ["one", "two", "three"];//obj指向了另一个对象(数组对象)
console.log(ref.name);//ref还指向原来的对象
console.log(obj.length);//3
console.log(ref.length);//undefined  JavaScript 中的引用始终指向最终的对象，而并非引用本身

















