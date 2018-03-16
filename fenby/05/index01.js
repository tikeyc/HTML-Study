



/**
 * [文档就绪函数 您也许已经注意到在我们的实例中的所有 jQuery 函数位于一个 document ready 函数中：]
 * @param  {[type]} ){--- jQuery        functions go here ----} [description]
 * @return {[type]}        [description]s
 */
$(document).ready(function(){

	// --- jQuery functions go here ----
	console.log("document ready");

	getElement();

	initProperty();

	setElementCSS();
});


/**
jQuery 语法实例
$(this).hide()
演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
$("#test").hide()
演示 jQuery hide() 函数，隐藏 id="test" 的元素。
$("p").hide()
演示 jQuery hide() 函数，隐藏所有 <p> 元素。
$(".test").hide()
演示 jQuery hide() 函数，隐藏所有 class="test" 的元素。
 */
function getElement (argument) {
	// body...
	//jQuery 元素选择器
	$(this);
	$("p");//选取 <p> 元素
	$("p#demo");//选取所有 id="demo" 的 <p> 元素
	$("p.demo");//选取所有 class="demo" 的 <p> 元素

	$("p.demo");//选取所有 class="demo" 的 <p> 元素。
 	$("p#demo");//选取所有 id="demo" 的 <p> 元素。
    
    $("ul li:first");//每个 <ul> 的第一个 <li> 元素
    $("div#intro .head");//id="intro" 的 <div> 元素中的所有 class="head" 的元素

   	//jQuery 属性选择器
 	$("[href]"); //选取所有带有 href 属性的元素。
	$("[href='#']"); //选取所有带有 href 值等于 "#" 的元素。
	$("[href!='#']"); //选取所有带有 href 值不等于 "#" 的元素。
	$("[href$='.jpg']"); //选取所有 href 值以 ".jpg" 结尾的元素。


	/**
	jQuery CSS 选择器
	jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
	下面的例子把所有 p 元素的背景颜色更改为红色：
	实例
	 */
	$("p").css("background-color","red");

	// var jq = jQuery.noConflict();//命名冲突解决
   
	$("tr:eq(1)");//从 0 开始计数 匹配一个给定索引值的元素
	$("tr:get(0)");//从 0 开始计数 匹配所有大于给定索引值的元素
	$("tr:lt(2)");//从 0 开始计数 匹配所有小于给定索引值的元素
 	$("li:last");//获取最后个元素
 	$(":header");//匹配如 h1, h2, h3之类的标题元素
	$(":header").css("background", "#EEE");//给页面内所有标题加上背景色

	//对不在执行动画效果的元素执行一个动画特效
	$("#run").click(function(){
  		$("div:not(:animated)").animate({ left: "+=20" }, 1000);

	});

	/**
	 * 选择该文档的根元素。在HTML中，文档的根元素，和$(":root")选择的元素一样， 永远是<html>元素。
	 */
	$(":root").css("background-color","green");//设置<html>背景颜色为绿色

	$("div:contains('John')");//查找所有包含 "John"文本 的 div 元素
	$("td:empty");//匹配所有不包含子元素或者文本的空元素

	$("div:has(p)").addClass('test');//给所有包含 p 元素的 div 元素添加一个 test 类
	$("td:parent");//查找所有含有子元素或者文本的 td 元素

	//匹配所有不可见元素，或者type为hidden的元素
	$("tr:hidden");//查找隐藏的 tr
	$("input:hidden")//匹配type为hidden的元素

	$("tr:visible");//查找所有可见的 tr 元素

	$("div[id]");//查找所有含有 id 属性的 div 元素
	$("input[name='newsletter']");//查找所有 name 属性是 newsletter 的 input 元素
	$("input[name='newsletter']").attr('checked', 'true');//查找所有 name 属性是 newsletter 的 input 元素 并添加cheked属性为true
	$(":not([name='newsletter'])");$("input[name!='newsletter']");//两者等价

 	$("input[name^='new']");//查找所有 name属性值 以 'news' 开始的 input 元素
 	$("input[name$='letter']");//查找所有 name属性值 以 'letter' 结尾的 input 元素
 	$("input[name*='man']");//查找所有 name属性值 包含 'man' 的 input 元素

 	$("input[id][name$='man']");//找到所有含有 id 属性，并且它的 name 属性是以 man 结尾的


 	$("ul li:first-child");//在每个 ul 中查找第一个 li
 	$("span:first-of-type");//查找span子类型的这些元素中排在最前的一个
 	$("ul li:last-child");//在每个 ul 中查找最后一个 li
	$("span:last-of-type");//查找span子类型的这些元素中排在最后的一个


	$("ul li:nth-child(2)");//要匹配元素的序号，从1开始; 在每个 ul 查找第 2 个li
	$("ul li:nth-last-child(2)");//在每个匹配的ul中查找倒数第二个li
	$("ul li:nth-last-of-type(2)");//在每个匹配的ul中查找倒数第二个li

	$("span:nth-of-type(2)");//查找每个span，这个 span 是 其所有兄弟span元素中的第二个元素。

	$("ul li:only-child");//在 ul 中查找是唯一子元素的 li(只有一个子元素)
	$("ul li:only-of-type");//选择所有没有兄弟元素，且具有相同的元素名称的元素。如果父元素有相同的元素名称的其他子元素，那么没有元素会被匹配

	/**
	 <form>
		<input type="text" />
		<input type="checkbox" />
		<input type="radio" />
		<input type="image" />
		<input type="file" />
		<input type="submit" />
		<input type="reset" />
		<input type="password" />
		<input type="button" />
		<select><option/></select>
		<textarea></textarea>
		<button></button>
	</form>
	 */
	$(":input");//匹配所有 input, textarea, select 和 button 元素
	$(":text");//匹配所有的单行文本框
	$(":password");//匹配所有密码框
	$(":radio");//匹配所有单选按钮
	$(":checkbox");//匹配所有复选框
	$(":submit");//匹配所有提交按钮
	$(":image");//匹配所有图像域
	$(":reset");//匹配所有重置按钮
	$(":button");//匹配所有按钮
	$(":file");//匹配所有文件域

	$("input:enabled");//匹配所有可用元素
}



function initProperty (argument) {
	// body...
	
	
	var imgSrc = $("img").attr("src");//返回文档中所有图像的src属性值。
	$("img").attr({
		src: 'test.jpg',
		alt: 'test image'
	});//为所有图像设置src和alt属性。
	$("img").css({
		src: 'test.jpg',
		alt: 'test image'
	});//为所有图像设置src和alt属性。
	$("img").attr('title', function () {
		return this.src;
	});//把src属性的值设置为title属性的值。


	$("img").removeAttr('src');//将文档中图像的src属性删除

	var inputChecked = $("input[type='checkbox']").prop('checked');//获取在匹配的元素集中的第一个元素的属性值
	//i:匹配的所有元素集合的数组下标，val：当前是否选中
	$("input[type='checkbox']").prop("checked", function( i, val ) {
		console.log(i + "--" + val);
		if (i % 2) {
			return true;
		} else {
			return false;
		}
  		return val;
	});



	var $para = $("p");
	$para.prop("luggageCode", 1234);
	$para.append("The secret luggage code is: ", String($para.prop("luggageCode")), ". ");
	$para.removeProp("luggageCode");//用来删除由.prop()方法设置的属性集
	$para.append("Now the secret luggage code is: ", String($para.prop("luggageCode")), ". ");


	$("p").addClass("selected");//为每个匹配的元素添加指定的类名。
	$("p").addClass("selected1 selected2");//一个或多个要添加到元素中的CSS类名，请用空格分开
	//此函数必须返回一个或多个空格分隔的class名。接受两个参数，index参数为对象在这个集合中的索引值，class参数为这个对象原先的class属性值。
	$("ul li:last()").addClass(function (index,className) {
		console.log(index + "--" + className);
		return 'item-' + $(this).index();
	});

	$("p").removeClass("selected");//从匹配的元素中删除 'selected' 类
	$('li:last').removeClass(function() {//删除最后一个元素上与前面重复的class
    	return $(this).prev().attr('class');
	});


	//toggleClass(class|fn[,sw]) 如果存在（不存在）就删除（添加）一个类。
	$("p").toggleClass("selected");//为匹配的元素切换 'selected' 类
	//每点击三下加上一次 'highlight' 类	
	var count = 0;
	$("p").click(function(){
	  $(this).toggleClass("highlight", count++ % 3 == 0);
	});

	// html([val|fn]): 取得第一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档。
	//在一个 HTML 文档中, 我们可以使用 .html() 方法来获取任意一个元素的内容。 
	//如果选择器匹配多于一个的元素，那么只有第一个匹配元素的 HTML 内容会被获取。
	$("p").html();//返回p元素的内容。
	$("a").html("hello <b>world</b>!");//设置所有 p 元素的内容
	$("a").html(function (index) {//使用函数来设置所有匹配元素的文本内容
		return "这个 a 元素的 index 是：" + index;
	});

	// text([val|fn]): 取得所有匹配元素的内容。结果是由所有匹配元素包含的文本内容组合起来的文本。这个方法对HTML和XML文档都有效。
	$("p").text();//返回p元素的文本内容
	$("a").text('Hello world');//设置所有 p 元素的文本内容

	//val([val|fn|arr]): 获得匹配元素的当前值。在 jQuery 1.2 中,可以返回任意元素的值了。包括select。如果多选，将返回一个数组，其包含所选的值。
	$("input").val();//获取文本框中的值
	// $("input").val("hello world!");//设定文本框的值

}


function setElementCSS (argument) {
	
	//css(name|pro|[,val|fn]): 访问匹配元素的样式属性。jQuery 1.8中，当你使用CSS属性在css()或animate()中，我们将根据浏览器自动加上前缀(在适当的时候)，
	//比如("user-select", "none"); 在Chrome/Safari浏览器中我们将设置为"-webkit-user-select", Firefox会使用"-moz-user-select", IE10将使用"-ms-user-select".
	
	$("p").css("color");//取得第一个段落的color样式属性的值。
	$("p").css({//将所有段落的字体颜色设为红色并且背景为蓝色。
		color: '#fc32d0',
		background: 'blue'
	});

	//逐渐增加div的大小
	$("div").click(function(event) {
		$(this).css({
			width: function (index,value) {
				return parseFloat(value) * 1.2;
			},	
		    height: function (index,value) {
		    	return parseFloat(value) * 1.2;
		    }
		});
	});

	//offset([coordinates]): 获取匹配元素在当前视口的相对偏移。返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
	var em = $("em:last");
	var offset = em.offset();
	em.html( "left: " + offset.left + ", top: " + offset.top );


	//position(): 获取匹配元素相对父元素的偏移。返回的对象包含两个整型属性：top 和 left。为精确计算结果，请在补白、边框和填充属性上使用像素单位。此方法只对可见元素有效。
	var em = $("em:first");
	var position = em.position();
	em.html( "left: " + position.left + ", top: " + position.top );

	//scrollTop([val]): 获取匹配元素相对滚动条顶部的偏移。此方法对可见和隐藏元素均有效。
 	em.scrollTop();
 	$("div.demo").scrollTop(600);//设置相对滚动条顶部的偏移
 	em.scrollLeft();
    $("div.demo").scrollLeft(300);

	//heigh([val|fn]): 取得匹配元素当前计算的高度值（px）。在 jQuery 1.2 以后可以用来获取 window 和 document 的高
    em.height();//
    $("button").click(function(){
	    $("p").height(function(n,c){
	    	return c + 10;
	    });
  	});

    // width([val|fn]): 取得第一个匹配元素当前计算的宽度值（px）。在 jQuery 1.2 以后可以用来获取 window 和 document 的宽
    $("p").width();//获取第一段的宽
    $("button").click(function(){
	    $("div").width(function(n,c){
		    return c + 10;
	    });
	    $("div").height(function(n,c){
	    	return c + 10;
	    });
    });

    // innerHeight(): 获取第一个匹配元素内部区域高度（包括补白、不包括边框）。此方法对可见和隐藏元素均有效。
    $("p:first").innerHeight();
    $("p:first").innerWidth();

    //outerHeight([soptions]): 获取第一个匹配元素外部高度（默认包括补白和边框）。此方法对可见和隐藏元素均有效。

	// append(content|fn): 向每个匹配的元素内部追加内容。这个操作与对指定的元素执行appendChild方法，将它们添加到文档中的情况类似。
    em.append('<b> I would like to say:</b>');

    //appendTo(content): 把所有匹配的元素追加到另一个指定的元素元素集合中。实际上，使用这个方法是颠倒了常规的$(A).append(B)的操作，即不是把B追加到A中，而是把A追加到B中。
    $("p").appendTo("div");//把匹配到的p元素添加到匹配到的div元素中

    // prepend(content|fn): 向每个匹配的元素内部前置内容。这是向所有匹配元素内部的开始处插入内容的最佳方式。
    $("p").prepend('<b>Hello</b>');//向所有段落中前置一些HTML标记代码。


}


function setElementCSS02 (argument) {
	/*开始：=
    <p>I would like to say: </p>
	<p>I would like to say: </p>
	<b class="foo">Hello</b>
	<b class="foo">Good Bye</b>
     */
    $("p").prepend( $(".foo")[0]);
    /*结果：
    <p><b class="foo">Hello</b>I would like to say: </p>
	<p><b class="foo">Hello</b>I would like to say: </p>
	<b class="foo">Good Bye</b>
     */
    //prependTo(content): 把所有匹配的元素前置到另一个、指定的元素元素集合中。实际上，使用这个方法是颠倒了常规的$(A).prepend(B)的操作，即不是把B前置到A中，而是把A前置到B中
    $("p").prependTo("#foo");//把所有段落追加到ID值为foo的元素中。


    //after(content|fn): 在每个匹配的元素之后插入内容。
    $("p").after('<b>Hello</b>');//在所有段落之后插入一些HTML标记代码
    $("p").after( $("#foo")[0] );//在所有段落之后插入一个DOM元素。
    //before(content|fn): 在每个匹配的元素之前插入内容。
    $("p").before('<b>Hello</b>');//在所有段落之前插入一些HTML标记代码
    $("p").before( $("#foo")[0] );//在所有段落之前插入一个DOM元素。

    //insertAfter(content): 把所有匹配的元素插入到另一个、指定的元素元素集合的后面。实际上，使用这个方法是颠倒了常规的$(A).after(B)的操作，即不是把B插入到A后面，而是把A插入到B后面。
    $("p").insertAfter('#foo');
    //把所有匹配的元素插入到另一个、指定的元素元素集合的前面。实际上，使用这个方法是颠倒了常规的$(A).before(B)的操作，即不是把B插入到A前面，而是把A插入到B前面。
    $("p").insertBefore('#foo');

    //wrap(html|ele|fn): 把所有匹配的元素用其他元素的结构化标记包裹起来  一个一个的包裹
    $("p").wrap('<div class="extra-wrapper"></div>');
    // unwrap(): 这个方法将移出元素的父元素。这能快速取消 .wrap()方法的效果。匹配的元素（以及他们的同辈元素）会在DOM结构上替换他们的父元素。
    $("p").unwrap();

    //wrapall(html|ele): 将所有匹配的元素用单个元素包裹起来  包裹整体
    $("p").wrapAll('<div class="extra-wrapper"></div>');//用一个生成的div将所有段落包裹起来 包裹整体
    $("p").wrapAll(document.createElement("div"));//用一个生成的div将所有段落包裹起来 包裹整体

    //wrapInner(html|ele|fn) : 将每一个匹配的元素的子内容(包括文本节点)用一个HTML结构包裹起来
    $("p").wrapInner(document.createElement("b"));//把所有段落内的每个子内容加粗

    //replaceWith(content|fn): 将所有匹配的元素替换成指定的HTML或DOM元素。
    $("p").replaceWith("<b>Paragraph. </b>");//把所有的段落标记替换成加粗的标记。

    //replaceAll(selector): 用匹配的元素替换掉所有 selector匹配到的元素。
    $("<b>Paragraph. </b>").replaceAll("p");//把所有的段落标记替换成加粗标记

    //empty(): 删除匹配的元素集合中所有的子节点。
    $("p").empty();//把所有段落的子元素（包括文本节点）删除

    // remove([expr]): 从DOM中删除所有匹配的元素。这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。但除了这个元素本身得以保留之外，其他的比如绑定的事件，附加的数据等都会被移除。
    $("p").remove();//从DOM中把所有段落删除 标签删除，文本还在
    $("p").remove(".hello");//从DOM中把带有hello类的段落删除 标签删除，文本还在

    //detach([expr]): 从DOM中删除所有匹配的元素。这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。
    $("p").detach();//标签删除，文本还在
	$("p").detach(".hello");//标签删除，文本还在

	//clone([Even[,deepEven]]): 克隆匹配的DOM元素并且选中这些克隆的副本。在想把DOM文档中元素的副本添加到其他位置时这个函数非常有用。
	$("b").clone().prependTo("p");//克隆所有b元素（并选中这些克隆的副本），然后将它们前置到所有段落中。
	$("button").click(function(){//创建一个按钮，他可以复制自己，并且他的副本也有同样功能。
  		$(this).clone(true).insertAfter(this);
	});

}


function filterElement (argument) {
		
	//eq(index|-index): 获取当前链式操作中第N个jQuery对象，返回jQuery对象，当参数大于等于0时为正向选取，比如0代表第一个，1代表第二个。
	//当参数为负数时为反向选取，比如-1为倒数第一个，具体可以看以下示例。类似的有get(index),不过get(index)返回的是DOM对象。
	$("p").eq(1);//获取匹配的第二个元素
	$("p").eq(-2);//获取匹配的第二个元素

	$("p").first();//获取匹配的第一个元素
	$("p").last();//获取最后个元素

	$("a").hasClass('className');//检查当前的元素是否含有某个特定的类，如果有，则返回true。
	//filter(expr|obj|ele|fn) 筛选出与指定表达式匹配的元素集合。这个方法用于缩小匹配的范围。用逗号分隔多个表达式
	$("p").filter(".selected");//保留带有select类的元素
	$("p").filter(".selected, :first");//保留第一个以及带有select类的元素


	//is(expr|obj|ele|fn): 根据选择器、DOM元素或 jQuery 对象来检测匹配元素集合，如果其中至少有一个元素符合这个给定的表达式就返回true。

	// map(callback): 将一组元素转换成其他数组（不论是否是元素数组）你可以用这个函数来建立一个列表，不论是值、属性还是CSS样式，或者其他特别形式。这都可以用'$.map()'来方便的建立。
	/*把form中的每个input元素的值建立一个列表。
	<p><b>Values: </b></p>
	<form>
	  <input type="text" name="name" value="John"/>
	  <input type="text" name="password" value="password"/>
	  <input type="text" name="url" value="http://ejohn.org/"/>
	</form>
	*/
	$("p").append( $("input").map(function(){
	  return $(this).val();
	}).get().join(", ") );
	//结果：[ <p>John, password, http://ejohn.org/</p> ]

	// has(expr|ele): 保留包含特定后代的元素，去掉那些不含有指定后代的元素
	$('li').has('ul').css('background-color', 'red');//给含有ul的li加上背景色

	//not(expr|ele|fn): 从匹配元素的集合中删除与指定表达式匹配的元素
	$("p").not( $("#selected")[0] );//从p元素中删除带有 select 的ID的元素

	//slice(start,[end]): 根据下标start和end 选取一个匹配的子集
	$("p").slice(0, 1);//选择第一个p元素
	$("p").slice(0, 2);//选择前两个p元素
	$("p").slice(1, 2);//只选取第二个p元素
	$("p").slice(-1);//选取第最后一个p元素

	//children([expr]) :取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合。可以通过可选的表达式来过滤所匹配的子元素。
	//注意：parents()将查找所有祖辈元素，而children()只考虑子元素而不考虑所有后代元素。
	$("div").children();//查找DIV中的每个子元素
	$("div").children('.selected');//在每个div中查找 .selected 的类。

	/*closest(e|o|e) : 
	 *
	jQuery 1.3新增。从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素。。
	closest会首先检查当前元素是否匹配，如果匹配则直接返回元素本身。如果不匹配则向上查找父元素，一层一层往上，直到找到匹配选择器的元素。如果什么都没找到则返回一个空的jQuery对象。
	closest和parents的主要区别是：1，前者从当前元素开始匹配寻找，后者从父元素开始匹配寻找；2，前者逐级向上查找，直到发现匹配的元素后就停止了，后者一直向上查找直到根元素，然后把这些元素放进一个临时集合中，再用给定的选择器表达式去过滤；3，前者返回0或1个元素，后者可能包含0个，1个，或者多个元素。
	closest对于处理事件委托非常有用。
	.closest( selectors [, context ] )方法从 jQuery 1.7 开始，不再建议使用该方法，但是 jQuery 1.7 之前仍然可以使用。该方法将主要用于 jQuery 内部或插件作者使用。
	*/
	/*展示如何使用clostest来完成事件委托:
	 *
	 <ul>
	    <li><b>Click me!</b></li>
	    <li>You can also <b>Click me!</b></li>
	</ul>
	 */
	$(document).bind("click", function (e) {
		$(e.target).closest("li").toggleClass("hilight");
	});

	$("p").find('span');//从所有的段落开始，进一步搜索下面的span元素。与$("p span")相同。

	/*
	 <p>Hello</p>
	 <p>Hello Again</p>
	 <div>
	 	<span>And Again</span>
	 </div>6
	 */
	$("p").next();//找到每个段落的后面紧邻的同辈元素。结果：[ <p>Hello Again</p>, <div><span>And Again</span></div> ]
	//nextAll([expr]): 查找当前元素之后所有的同辈元素。

	/*nextUntil([e|e][,f]): 查找当前元素之后所有的同辈元素，直到遇到匹配的那个元素为止
	 *
	 如果提供的jQuery代表了一组DOM元素，.nextUntil()方法也能让我们找遍所有元素所在的DOM树，直到遇到了一个跟提供的参数匹配的元素的时候才会停下来。
	 这个新jQuery对象里包含了下面所有找到的同辈元素，但不包括那个选择器匹配到的元素。
	 如果没有选择器匹配到，或者没有提供参数，那么跟在后面的所有同辈元素都会被选中。这就跟用没有提供参数的 .nextAll() 效果一样。
	*/

	//offsetParent(): （感觉是父视图的意思）返回第一个匹配元素用于定位的父节点。这返回父元素中第一个其position设为relative或者absolute的元素。此方法仅对可见元素有效

	$("p").parent();//查找每个段落的父元素
	$("span").parents();//找到每个span元素的所有祖先元素。

	$('li.item-a').parentsUntil('.level-1');//查找item-a的祖先，但不包括level-1

	$("p").prev();//找到每个段落紧邻的前一个同辈元素。

	//prevall([expr]): 查找当前元素之前所有的同辈元素
	$("div:last").prevAll().addClass("before");//给最后一个之前的所有div加上一个类

	// prevUntil([e|e][,f]): 查找当前元素之前所有的同辈元素，直到遇到匹配的那个元素为止。

	$("div").siblings();//找到每个div的所有同辈元素。

	$("p").add("<span>Again</span>");//<p>Hello</p> 动态生成一个元素并添加至匹配的元素中;结果：[ <p>Hello</p>, <span>Hello Again</span> ]

	// addBack('selector'): 添加堆栈中元素集合到当前集合，一个选择性的过滤选择器。

	// contents(): 查找匹配元素内部所有的子节点（包括文本节点）。如果元素是一个iframe，则查找文档内容

	/*选取所有的p元素，查找并选取span子元素，然后再回过来选取p元素
	 *
	 <p><span>Hello</span>,how are you?</p>
	 */
	 $("p").find("span").end();//相当于 $("p")，也就是还原上一次操作
	 // 结果：[ <p><span>Hello</span> how are you?</p> ]

}


function initEvent (argument) {
	
	jQuery(document).ready(function($) {
		
	});
	
	$(document).ready(function() {
		
	});

	$(function() {
		
	}); 

	//on(eve,[sel],[data],fn): 在选择元素上绑定一个或多个事件的事件处理函数。
	$("p").on('click', '.selector', function(event) {
		event.preventDefault();
		/* Act on the event */
	});

	//off(eve,[sel],[fn]): 在选择元素上移除一个或多个事件的事件处理函数。
	$("p").off();
	$("p").off('click','.selector');
	//bind(type,[data],fn): 为每个匹配元素的特定事件绑定事件处理函数。jQuery 3.0中已弃用此方法，请用 on()代替。
	//unbind(t,[d|f]): bind()的反向操作，从每一个匹配的元素中删除绑定的事件。jQuery 3.0中已弃用此方法，请用 off()代替。

	//trigger(type,[data]): 在每一个匹配的元素上触发某类事件。
	//绑定一个事件
	$("p").click( function (event, a, b) {
	  // 一个普通的点击事件时，a和b是undefined类型
	} );
	// 主动触发事件 如果用下面的语句触发，那么a指向"foo",而b指向"bar"
	$("p").trigger("click", ["foo", "bar"]);

	/** triggerHandler(type, [data])
	 * 
	 * 这个特别的方法将会触发指定的事件类型上所有绑定的处理函数。但不会执行浏览器默认动作，也不会产生事件冒泡。
	 * 这个方法的行为表现与trigger类似，但有以下三个主要区别：
	 * 第一，他不会触发浏览器默认事件。
	 * 第二，只触发jQuery对象集合中第一个元素的事件处理函数。
	 * 第三，这个方法的返回的是事件处理函数的返回值，而不是据有可链性的jQuery对象。此外，如果最开始的jQuery对象集合为空，则这个方法返回 undefined 。
	 */

	//live(type,[data],fn): jQuery 给所有匹配的元素附加一个事件处理函数，即使这个元素是以后再添加进来的也有效。
	//这个方法是基本是的 .bind() 方法的一个变体。使用 .bind() 时，选择器匹配的元素会附加一个事件处理函数，而以后再添加的元素则不会有。为此需要再使用一次 .bind() 才行。
	$('.clickme').live('click', function() {
  		alert("Live handler called."); 
	});

	











}

















