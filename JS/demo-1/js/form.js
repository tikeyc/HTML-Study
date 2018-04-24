
/**
 * Window 尺寸
    有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

    对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

    window.innerHeight - 浏览器窗口的内部高度
    window.innerWidth - 浏览器窗口的内部宽度
    对于 Internet Explorer 8、7、6、5：

    document.documentElement.clientHeight
    document.documentElement.clientWidth
    或者

    document.body.clientHeight
    document.body.clientWidth
 */
var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

/**
 * Window Screen
    window.screen 对象在编写时可以不使用 window 这个前缀。

    一些属性：

    screen.availWidth - 可用的屏幕宽度
    screen.availHeight - 可用的屏幕高度
 */
var availWidth = screen.availWidth;
var availHeight = screen.availHeight;

/**
 * Window Location
    window.location 对象在编写时可不使用 window 这个前缀。

    一些例子：

    location.hostname 返回 web 主机的域名
    location.pathname 返回当前页面的路径和文件名
    location.port 返回 web 主机的端口 （80 或 443）
    location.protocol 返回所使用的 web 协议（http:// 或 https://）
    location.href 返回（当前页面的）整个 URL
    location.assign('index.html or http://www.w3school.com.cn') 方法加载新的文档
 */

/**
 * Window History
    window.history 对象在编写时可不使用 window 这个前缀。

    为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

    一些方法：

    history.back() - 与在浏览器点击后退按钮相同
    history.forward() - 与在浏览器中点击按钮向前相同
 */

/**
 * [显示浏览器信息]
 * @return {[type]} [浏览器信息]
 */
function showAppInformation() {
  txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
  txt+= "<p>Browser Name: " + navigator.appName + "</p>";
  txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
  txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
  txt+= "<p>Platform: " + navigator.platform + "</p>";
  txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
  txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";

  document.getElementById("appInformation").innerHTML = txt;
  return txt;
}

/**
 * 警告框
    警告框经常用于确保用户可以得到某些信息。

    当警告框出现后，用户需要点击确定按钮才能继续进行操作。

    语法：
    alert("文本")

 *确认框
    确认框用于使用户可以验证或者接受某些信息。

    当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。

    如果用户点击确认，那么返回值为 true。如果用户点击取消，那么返回值为 false。

    语法：
    confirm("文本")

 *提示框
    提示框经常用于提示用户在进入页面前输入某个值。

    当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

    如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。

    语法：
    prompt("文本","默认值")
 */

/**
 * var t = setTimeout("javascript语句",毫秒)
 * clearTimeout(t);
 */

 function getCookie(c_name) {
   if (document.cookie.length > 0) {
     c_start = document.cookie.indexOf(c_name + "=")
     if (c_start != -1) {
       c_start = c_start + c_name.length + 1;
       c_end = document.cookie.indexOf(";",c_start);
       if (c_end == -1) {
         c_end = document.cookie.length;
       }
       return unescape(document.cookie.substring(c_start,c_end));
     }
   }
   return "";
 }

 function setCookie(c_name,value,expiredays) {
   var exdate = new Date();
   exdate.setDate(exdate.getDate() + expiredays);
   document.cookie = c_name + "=" + escape(value)
   + ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
 }

 function checkCookie(){
   username = getCookie('username');
   if (username != null && username != "") {
     alert('Welcome again '+ username + '!');
   }else {
     username = prompt('Please enter your name:',"");
     if (username != null && username != "") {
       setCookie('username',username,365);
     }
   }
 }

//////////////////////////////////

window.onload = function () {

  showAppInformation();

  var formObj = document.getElementById('formObj');
  formObj.addEventListener('submit',buttonClick,false);

  dealTextarea();
}

function buttonClick(event) {
  var email = document.getElementById('email').value;
  if (email == '') {
    alert('请输入邮箱');
    if (event && event.preventDefault) {
      event.preventDefault();
    } else {//针对IE
      window.event.returnValue = false;
    }
  } else {
    if (/^\w+@\w+\.\w+$/.test(email)) {
      this.submit()
    } else {
      alert('请输入合法邮箱');
      if (event && event.preventDefault) {
        event.preventDefault();
      } else {//针对IE
        window.event.returnValue = false;
      }
    }
  }
}

function dealTextarea() {
  var maxWords = 100;
  var textarea = document.getElementById('textarea');
  textarea.style.background = 'lightblue';
  textarea.addEventListener('keyup',function () {
    console.log('onKeyup');

  },false);
  textarea.addEventListener('keydown',function () {
    console.log('onKeyup');
    var num = 100 - this.value.length;
    var span = document.getElementById('span');
    span.innerHTML = '您还可以输入' + "<span style='color:red'>" + num + "</span>";
  },false);

}
