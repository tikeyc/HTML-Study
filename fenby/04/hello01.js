
/**
 *  div.highlight 选择 CSS 类 highlight 的所有 div 元素
 *  table#tabid 选择ID为tabid的table元素
 *  #aid.aclass 选择 ID 为 aid，CSS 类为 aclass 的链接元素
 *
 *  选择器	作用
	:first	选择第一个匹配
	:last	选择最后一个匹配
	:first-child	选择第一个字元素￼
	:last-child	选择最后一个子元素
	:nth-child(n)	选择第 n 个子元素
	:even 及 :odd	选择偶数/奇数子元素集
	:eq(n)	第n个元素(从0开始)
	￼:gt(n)	选择第 n 个元素之后的元素集
	:lt(n)	￼选择第 n 个元素之前的元素集
	比如：
	li a:first 匹配在列表(<li>)元素下的第一个链接(<a>)元素。
	table tbody td:nth-child(5)返回 table 的第 6 列元素集。


	自定义选择器：

	选择器	作用
	:button	选择按钮
	:checkbox	选择复选框
	:checked	选择已经选中的复选框/单选框
	:hidden	选择属性为隐藏的元素
	:enabl	选择启用的元素
	:disable￼	选择禁用的元素
	:image	选择图片
	:input	选择输入框
	:radio￼	选择单选框
	:not(filter)	反向选择器

	应该注意的是，这些选择器可以组合使用，这样会给我们提供极大的方便，比如：
	:input:enable 选择已经启用的文本框元素
	:checkbox:checked 选择已经选择的复选框元素

 */

function setTable01Grid () {
	/**
	* array : 要遍历的数组对象
	* function : 遍历函数
	  
	  $.each(array, function(name, value){});
	*/
	/**
	* array : 要过滤的数组对象
	* callback : 过滤条件
	* invert : 是否启用反转,如果启用,则符合callback的将被过滤 
	  
	  $.grep(array, callback, invert);
	*/
	
	/**
	* array : 需要做转换的数组对象
	* callback : 对数组中元素的映射函数
	  
	  $.map(array, callback);
	*/
	

	var table01 = $("div#table01 table tbody tr:nth-child(even)");
	table01.css({
		'background-color': 'gray'
	});
}

function setDiv02BackgroundColor (value) {
	var div02 = $("div#div02_1");
	div02.css({
		'background-color': value
	});
	

	var div02_button_red = $("button#red_button");
	var div02_button_yellow = $("button#yellow_button");

	if (value == 'red') {
		div02_button_red.css({
			'background-color': 'red'
		});
		div02_button_yellow.css({
			'background-color': 'white'
		});
	} else if (value == 'yellow') {
		div02_button_red.css({
			'background-color': 'white'
		});
		div02_button_yellow.css({
			'background-color': 'yellow'
		});
	};;
}


function bind_button () {
	var div02 = $("div#div02_1");
	//
	div02.bind('click', function(event) {
		/* Act on the event */
		alert("bind绑定事件,unbind解绑事件");
	});
}

$(document).ready(function() {
	var div02 = $("div#div02_1");
	div02.hover( 
		function(event){
			$(this).css('background', 'red'); 
		},
		function(event){ 
			$(this).css('background', 'yellow');
		} 
	);
});


/**
 * 
 */
var list = $("div#itemlist");

function additem(){
	var itemValue = $("input#item").val(); 
	if(!itemValue || itemValue.length == 0){
		alert("请输入");
		return false; 
	}
	$('#list').append('<li>'+itemValue+'</li>'); 
}





















