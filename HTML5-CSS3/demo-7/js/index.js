window.onload = function () {



}


function sendButtonClick() {
  var col = document.getElementById('col');
  var form = document.getElementById('form');

  var content1 = document.getElementById("content1");
  //1
  var new_content = document.createElement("div");
  new_content.className = 'shadow container padding-tb round margin-bottom animate-top';
  //2
  var container = document.createElement("div");
  container.className = 'container';
  new_content.appendChild(container);
  //3
  var img = document.createElement("img");
  img.className = 'circle left margin-right  hover-shadow-small';
  img.src = '../icon.jpg';
  img.style.width = '60px';
  img.style.height = '60px';
  new_content.appendChild(img);
  //4
  var span = document.createElement("span");
  span.className = 'right text-grey';
  span.innerHTML = '1min';
  new_content.appendChild(span);
  //5
  var h3 = document.createElement("h3");
  h3.innerHTML = 'tikeyc';
  new_content.appendChild(h3);
  //6
  var br = document.createElement("br");
  new_content.appendChild(br);
  //7
  var hr = document.createElement("hr");
  hr.className = 'clear';
  new_content.appendChild(hr);
  //8
  var p = document.createElement("p");
  var input_content = document.getElementById('input_content');
  if (input_content.value == '') {
    p.innerHTML = '发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态，发布的动态';
  } else {
    p.innerHTML = input_content.value;
    input_content.value = '';
  }
  new_content.appendChild(p);
  //
  var row_padding = document.createElement("div");
  row_padding.className = 'row-padding';
  new_content.appendChild(row_padding);

  var img_array = new Array('http://7xi8d6.com1.z0.glb.clouddn.com/20180129074038_O3ydq4_Screenshot.jpeg','http://7xi8d6.com1.z0.glb.clouddn.com/20171228085004_5yEHju_Screenshot.jpeg');
  for (var i = 0; i < img_array.length; i++) {
    var row_col = document.createElement("div");
    row_col.className = 'col l6 s12 margin-bottom';
    row_padding.appendChild(row_col);
    var col_img = document.createElement("img");
    col_img.className = 'img hover-shadow-large';
    col_img.src = img_array[i];
    col_img.style.width = '100%';
    col_img.style.height = 'auto';
    row_col.appendChild(col_img);
  }
  //9
  var container2 = document.createElement("div");
  container2.className = 'container2';
  new_content.appendChild(container2);
  //9-1
  var button1 = document.createElement("button");
  button1.className = 'button red';
  button1.innerHTML = '喜欢';
  container2.appendChild(button1);
  //9-1-1
  var i_up = document.createElement("i");
  i_up.className = 'fa fa-thumbs-up margin-right';
  button1.appendChild(i_up);
  //9-2
  var button2 = document.createElement("button");
  button2.className = 'button black';
  button2.innerHTML = '喜欢';
  container2.appendChild(button2);
  //9-2-1
  var i_comment = document.createElement("i");
  i_comment.className = 'fa fa-comment margin-right';
  button2.appendChild(i_comment);
  //在content1节点前插入新创建的元素节点new_content
  // col.insertBefore(new_content,content1);
  //在form节点后插入新创建的元素节点new_content
  col.insertBefore(new_content,form.nextSibling);
}

var copyCount = 0;
function copyMessage() {
  copyCount++;
  if (copyCount > 5) {
    console.log('copyCount:' + copyCount);
    return;
  }
  var col1_div = document.getElementById('col1_div');
  var tag_div = document.getElementById('tag_div');
  //
  var newMessage_div = document.createElement('div');
  newMessage_div.className = 'shadow relative-contaner lightyellow container padding-tb round margin-bottom animate-left';
  //
  var button = document.createElement('button');
  button.className = 'btn top-right';
  button.innerHTML = 'x';
  button.onclick = function () {
    this.parentNode.style.display = 'none';
  };
  newMessage_div.appendChild(button);
  //
  var h4 = document.createElement('h4');
  h4.innerHTML = 'Hey' + copyCount;
  newMessage_div.appendChild(h4);
  //
  var p_content = document.createElement('p');
  p_content.className = 'small';
  p_content.innerHTML = '您收到的新消息，您收到的新消息，您收到的新消息:' + copyCount;
  newMessage_div.appendChild(p_content);
  //
  col1_div.insertBefore(newMessage_div, tag_div.nextSibling);
  //
  setTimeout(copyMessage,1000*copyCount);
}

// 延迟2s执行
setTimeout(sendButtonClick,2000);
setTimeout(copyMessage,1000);
// 每秒执行
// setInterval(sendButtonClick,1000);
