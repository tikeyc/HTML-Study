// 数组有这样几种方式来创建：

var array = new Array();
var array = new Array(10);//长度
var array = new Array("apple", "borland", "cisco");
//  问题      
// 不过，运用最多的为字面量方式来创建，如果第三章中的JSON那样，我们完全可以这样创建数组：

var array = [];
var array = ["one", "two", "three", "four"];
//  问题      
// 下面我们通过一些实际的小例子来说明数组的使用(主要方法的使用)： 向数组中添加元素：

var array = [];

array.push(1);
array.push(2);
array.push(3);

array.push("four"); 
array.push("five");

array.push(3.1415926);
//  问题      
// 前面提到过，JavaScript的数组有列表的性质,因此可以向其中push不同类型的元素，接上例：

var len = array.length; 
for(var i = 0; i < len; i++){
console.log(typeof array[i]); 
}
//  问题      
// 结果为:

// number
// number
// number
// string
// string
// number
//  问题      
// 弹出数组中的元素:

for(var i = 0; i < len; i++){ 
console.log(array.pop());
}
console.log(array.length);
//  问题      
// 运行结果如下，注意最后一个0是指array的长度为0，因为这时数组的内容已经全部弹出：

// 3.1415926
// five
// four
// 3
// 2 
// 1 
// 0
//  问题      
// join，连接数组元素为一个字符串：

array = ["one", "two", "three", "four", "five"];

var str1 = array.join(","); 
var str2 = array.join("|");

console.log(str1);
console.log(str2);
//  问题      
// 运行结果如下:

// one,two,three,four,five 
// one|two|three|four|five
//  问题      
// 连接多个数组为一个数组：

var another = ["this", "is", "another", "array"]; 
var another2 = ["yet", "another", "array"];

var bigArray = array.concat(another, another2);
//  问题      
// 结果为:

// one,two,three,four,five,this,is,another,array,yet,another,array
//  问题      
// 从数组中取出一定数量的元素,不影响数组本身:

console.log(bigArray.slice(5,9));
//  问题      
// 结果为:

// this,is,another,array
//  问题      
// slice方法的第一个参数为起始位置,第二个参数为终止位置，操作不影响数组本身。下面我们来看splice方法，虽然这两个方法的拼写非常相似，但是功用则完全不同，事实上，splice是一个相当难用的方法：

//  问题      
 bigArray.splice(5, 2);
bigArray.splice(5, 0, "very", "new", "item", "here");
//  问题      
// 第一行代码表示，从bigArray数组中，从第5个元素起，删除2个元素；而第二行代码表示，从第5个元素起，删除0个元素，并把随后的所有参数插入到从第5个开始的位置，则操作结 果为：

// one,two,three,four,five,very,new,item,here,another,array,yet,another, array
//  问题      
// 我们再来讨论下数组的排序，JavaScript的数组的排序函数sort将数组按字母顺序排序，排序过程会影响源数组，比如：

var array = ["Cisio", "Borland", "Apple", "Dell"]; 
console.log(array);
array.sort();
console.log(array);
//  问题      
// 执行结果为：

// Cisio,Borland,Apple,Dell 
// Apple,Borland,Cisio,Dell
//  问题      
// 这种字母序的排序方式会造成一些非你所预期的小bug，比如：
var array = [10, 23, 44, 58, 106, 235]; 
array.sort();
console.log(array);
//  问题      
// 得到的结果为：

// 10,106,23,235,44,58
//  问题      
// 可以看到，sort不关注数组中的内容是数字还是字母,它仅仅是按照字母的字典序来进行排序，对于这种情况,JavaScript提供了另一种途径，通过给sort函数传递一个函数对象， 按照这个函数提供的规则对数组进行排序。

//  问题

 function sorter(a, b){ 
return a - b;
}

var array = [10, 23, 44, 58, 106, 235]; 
array.sort(sorter);
console.log(array);
//  问题      
// 函数sorter接受两个参数，返回一个数值,如果这个值大于0，则说明第一个参数大于第二 个参数，如果返回值为0，说明两个参数相等，返回值小于0，则第一个参数小于第二个参数，sort根据这个返回值来进行最终的排序：

// 10,23,44,58,106,235
//  问题      
// 当然，也可以简写成这样：

array.sort(function(a, b){return a - b;});//正序
array.sort(function(a, b){return b - a;});//逆序