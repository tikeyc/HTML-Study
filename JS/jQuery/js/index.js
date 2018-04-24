$(document).ready(function () {
  console.log('jQuery ready');

  initTag();

  initAnimation();

  appendTag();

  removeTag();
});

/**
 *
 * jQuery 提供多个处理尺寸的重要方法：

    width() 设置或返回元素的宽度（不包括内边距、边框或外边距）。
    height() 设置或返回元素的高度（不包括内边距、边框或外边距）

    innerWidth() 返回元素的宽度（包括内边距）
    innerHeight() 返回元素的高度（包括内边距）

    outerWidth() 返回元素的宽度（包括内边距和边框）
    outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）
    outerHeight() 返回元素的高度（包括内边距和边框）
    outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）
 */

/**
 * jQuery 名称冲突
    jQuery 使用 $ 符号作为 jQuery 的简介方式。

    某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

    jQuery 使用名为 noConflict() 的方法来解决该问题。

    var jq=jQuery.noConflict()，帮助您使用自己的名称（比如 jq）来代替 $ 符号。
 * jQuery 语法
    jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。

    基础语法是：$(selector).action()

    美元符号定义 jQuery
    选择符（selector）“查询”和“查找” HTML 元素
    jQuery 的 action() 执行对元素的操作
 * jQuery 语法实例
   $(this).hide()
   演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
   $("#test").hide()
   演示 jQuery hide() 函数，隐藏 id="test" 的元素。
   $("p").hide()
   演示 jQuery hide() 函数，隐藏所有 <p> 元素。
   $(".test").hide()
   演示 jQuery hide() 函数，隐藏所有 class="test" 的元素。
 */

/**
 * jQuery 元素选择器
    jQuery 使用 CSS 选择器来选取 HTML 元素。

    $("p") 选取 <p> 元素。

    $("p.intro") 选取所有 class="intro" 的 <p> 元素。

    $("p#demo") 选取所有 id="demo" 的 <p> 元素。
 *jQuery 属性选择器
    jQuery 使用 XPath 表达式来选择带有给定属性的元素。

    $("[href]") 选取所有带有 href 属性的元素。

    $("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

    $("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

    $("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
 *
 */

function initTag() {
  //设置CSS样式
  $('#p1').css('background-color','red');
  $('#p1').css({
    'border':'1px solid gray',
    'height':'50px',
    'lineHeight':'50px'
  });
  //点击事件
  $('.button1').click(function () {
    // if ($('#p1').is(':hidden')) {
    //   $('#p1').show();
    // } else {
    //   $('#p1').hide();
    // }
    // 可使用下面代码代替
    var speed = 1000;//'slow'、'fast'
    $('#p1').toggle(speed,function () {
      console.log("$('#p1').toggle" + 'finish');
    });
  });

  // 设置属性
  $('.animate-div > img').attr({
    'width':'150px',
    'height':'150px',
    'src':'../icon.jpg'
  });
}

/**
 * jQuery Fading 方法
    通过 jQuery，您可以实现元素的淡入淡出效果。

    jQuery 拥有下面四种 fade 方法：

    fadeIn()
    fadeOut()
    fadeToggle()
    fadeTo()

    $(selector).fadeIn(speed,callback);
    可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

    可选的 callback 参数是 fading 完成后所执行的函数名称。

    jQuery 滑动方法
      通过 jQuery，您可以在元素上创建滑动效果。

      jQuery 拥有以下滑动方法：

      slideDown()
      slideUp()
      slideToggle()

      $(selector).slideDown(speed,callback);
 */


/**
 * jQuery 动画 - animate() 方法
    jQuery animate() 方法用于创建自定义动画。

    语法：
    $(selector).animate({params},speed,callback);
    必需的 params 参数定义形成动画的 CSS 属性。

    可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

    可选的 callback 参数是动画完成后所执行的函数名称。

    下面的例子演示 animate() 方法的简单应用；
    它把 <div> 元素移动到左边，直到 left 属性等于 250 像素为止：
 */
function initAnimation() {
  var speed = 1000;//'slow'、'fast'
  $(".animate-div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px',
  },
  'fast',
  function () {
    console.log('$(".animate-div").animate finish');
  }).slideUp(1000).slideDown(1000);
}

/**
 * 获得、设置内容 - text()、html() 以及 val()
    三个简单实用的用于 DOM 操作的 jQuery 方法：

    text() - 设置或返回所选元素的文本内容
    html() - 设置或返回所选元素的内容（包括 HTML 标记）
    val() - 设置或返回表单字段的值
 */


function appendTag() {
  $('.append-button').click(function () {
    $('.button1').after('<p>在被选元素“之后”插入内容1</p>','<p>在被选元素“之后”插入内容2</p>');
    $('.append-button').append('<p>在被选元素的“结尾”插入内容</p>');
    // this.prepend('在被选元素的开头插入内容');
    $('.animate-div > img').after('在被选元素“之后”插入内容');
    // $('.animate-div > img').before('被选元素之前插入内容');
  });
}

/**
 *
 remove() - 删除被选元素（及其子元素）
 empty() - 从被选元素中删除子元素

 * jQuery 操作 CSS
    jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

    addClass() - 向被选元素添加一个或多个类
    removeClass() - 从被选元素删除一个或多个类
    toggleClass() - 对被选元素进行添加/删除类的切换操作
    css() - 设置或返回样式属性
 */

function removeTag() {
  $('.remove-button').click(function () {
    // $('.remove-div').remove();
    $('.remove-div').empty();
    //删除 class="remove-p1" 的所有 <p> 元素：
    $('p').remove('.remove-p1');
    $('.remove-button').toggleClass('buttonClass');
  });
  $('.remove-button').addClass('buttonClass');
}

/**
 * 向上遍历 DOM 树
    这些 jQuery 方法很有用，它们用于向上遍历 DOM 树：

    parent()获得当前匹配元素集合中每个元素的父元素，由选择器筛选（可选）
    parents()获得当前匹配元素集合中每个元素的祖先元素，由选择器筛选（可选）
    parentsUntil()获得当前匹配元素集合中每个元素的祖先元素，直到遇到匹配选择器的元素为止
 *
 * 向下遍历 DOM 树
    下面是两个用于向下遍历 DOM 树的 jQuery 方法：

    children() 获得匹配元素集合中每个元素的所有子元素(所有直接子元素)。
    find() 获得当前匹配元素集合中每个元素的后代，由选择器进行筛选
    $("div").find("*"); 返回 <div> 的所有后代
 *
 * 在 DOM 树中水平遍历
    有许多有用的方法让我们在 DOM 树进行水平遍历：

    siblings()返回被选元素的所有同胞元素(兄弟元素)
    next()返回被选元素的下一个同胞元素，该方法只返回一个元素
    nextAll()返回被选元素的所有跟随的同胞元素
    nextUntil()返回介于两个给定参数之间的所有跟随的同胞元素
    //以下三个与上面刚好相反
    prev()
    prevAll()
    prevUntil()
 *
 *
    first() 方法返回被选元素的首个元素
    last() 方法返回被选元素的最后一个元素
    eq() 方法返回被选元素中带有指定索引号的元素  $("p").eq(1)
    filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回
    not() 方法返回不匹配标准的所有元素。提示：not() 方法与 filter() 相反
 */
