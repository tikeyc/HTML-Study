
$(document).ready(function(){

  loadDemoTestTxt();

  //jq 代替$：避免其他框架的混淆
  var jq = $.noConflict();
});

/**
 * jQuery load() 方法
     jQuery load() 方法是简单但强大的 AJAX 方法。

     load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

     语法：
     $(selector).load(URL,data,callback);
     必需的 URL 参数规定您希望加载的 URL。

     可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。

     可选的 callback 参数是 load() 方法完成后所执行的函数名称。
 */


/**
 *load 测试
 */
function loadDemoTestTxt() {
  $('.load-div').load('./source/demo_test.txt h2', loadCallback);
  $('#load-p1').load('./source/demo_test.txt #p1', loadCallback);
}

/**
 * load() 方法完成后所要允许的回调函数
 * @param  {[type]} responseTxt [包含调用成功时的结果内容]
 * @param  {[type]} statusTxt   [包含调用的状态]
 * @param  {[type]} xhr         [包含 XMLHttpRequest 对象]
 */
function loadCallback(responseTxt,statusTxt,xhr) {
  console.log('callback: ' + responseTxt);
  if(statusTxt=="success")
    // alert("外部内容加载成功！");
    console.log('外部内容加载成功！');
  if(statusTxt=="error")
    alert("Error: "+xhr.status+": "+xhr.statusText);
}


/**
 * jQuery $.get() 方法
    $.get() 方法通过 HTTP GET 请求从服务器上请求数据。

    语法：
    $.get(URL,callback);
    必需的 URL 参数规定您希望请求的 URL。

    可选的 callback 参数是请求成功后所执行的函数名。

    下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：
  *
  *jQuery $.post() 方法
    $.post() 方法通过 HTTP POST 请求从服务器上请求数据。

    语法：
    $.post(URL,data,callback);
    必需的 URL 参数规定您希望请求的 URL。

    可选的 data 参数规定连同请求发送的数据。

    可选的 callback 参数是请求成功后所执行的函数名。

    下面的例子使用 $.post() 连同请求一起发送数据：
  *
  *
  *
 */

/**
 * 这个 ASP 文件 ("demo_test.asp") 类似这样：
  <%
  response.write("This is some text from an external ASP file.")
  %>
 *
 */
function jQueryGetRequest() {
  $("button").click(function(){
    $.get("./source/demo_test.asp",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
}

/**
 * 这个 ASP 文件 ("demo_test_post.asp") 类似这样:
  <%
  dim fname,city
  fname=Request.Form("name")
  city=Request.Form("city")
  Response.Write("Dear " & fname & ". ")
  Response.Write("Hope you live well in " & city & ".")
  %>
 *
 */
function jQueryPostRequest() {
  $.post("./source/demo_test_post.asp",
  {
    name:"Donald Duck",
    city:"Duckburg"
  },
  function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}
