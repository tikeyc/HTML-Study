// window.alert("hello word!");
// document.write('hello word');

document.write("<table border='1'>");
for (var x = 1; x <= 9; x++) {
  document.write('<tr>');
  for (var y = 1; y <= x; y++) {
    document.write('<td>' + y + '*' + x + '=' + (x * y) + '</td>');
  }
  for (var y = 1; y <= 9 - x; y++) {
    document.write('<td>&nbsp</td>');
  }
  document.write('</tr>');
}
document.write('</table>');

/////////////////////
// function onload() {
//   console.log('onload');
//   initButtons();
// }

function onunload() {
  console.log('onunload');
  alert('onunload');
}
/////////////////////
window.onload = function () {
  console.log('onload');
  initButtons();
}

/**
 * addEventListener('type',fun);
 * type:click mouseup mousedown mouseout focus ...
 */
function initButtons() {
  var buttons = document.querySelectorAll('button');

  for(var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('mouseup', createParagraph);
  }
}

function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/////////////////////
