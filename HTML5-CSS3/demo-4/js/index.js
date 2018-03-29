//
var currentPage = 0;
var lastShowSlider;
var sliders;
var dots;
var lastShowDot;
// dom文档树加载完 （可以访问标签 js调用）
document.ready = function (callback) {

}

//dom文档树加载完和所有文件加载完
window.onload = function () {


  var slider_box = document.getElementsByClassName('slider-box');
  // console.log(slider_box);
  var page_btns_left = document.getElementById('page-btn-left');
  var page_btns_right = document.getElementById('page-btn-right');
  // console.log(page_btns_left);
  // console.log(page_btns_right);
  sliders = document.getElementsByClassName('slider');
  console.log('sliders:');
  console.log(sliders);
  dots = document.getElementsByClassName('dots');
  console.log('dots:');
  console.log(dots);
  if (sliders.length > 0) {
    lastShowSlider = sliders[0];
    console.log('lastShowSlider:');
    console.log(lastShowSlider);
  }
  if (dots.length > 0) {
    lastShowDot = dots[0];
  }

  page_btns_left.onclick = function () {
    currentPage = currentPage - 1;
    pageBtnClick(currentPage);
  }
  page_btns_right.onclick = function () {
    currentPage = currentPage + 1;
    pageBtnClick(currentPage);
  }

  for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.index = i;
    dot.onclick = function () {
      console.log('this.index:');
      console.log(this.index);
      currentPage = this.index;
      pageBtnClick();
    }
  }

}

function pageBtnClick() {
  if (currentPage < 0) {
    currentPage = sliders.length - 1;
  }
  if (currentPage >= sliders.length) {
    currentPage = 0;
  }
  console.log('currentPage:');
  console.log(currentPage);
  //
  lastShowSlider.style.display = "none";
  var currentShowSlider = sliders[currentPage];
  console.log('currentShowSlider:');
  console.log(currentShowSlider);
  currentShowSlider.style.display = "block";
  lastShowSlider = currentShowSlider;
  //
  lastShowDot.style.backgroundColor = 'transparent';
  var currentShowDot = dots[currentPage];
  currentShowDot.style.backgroundColor = '#fff';
  lastShowDot = currentShowDot;

}
