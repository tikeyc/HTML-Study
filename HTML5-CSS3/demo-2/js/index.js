window.onload = function(){
  var barBtn = document.getElementById("barBtn");
  var closeBtn = document.getElementById("closeBtn");
  var navModal = document.getElementById("navModal");

  barBtn.onclick = function () {
    navModal.style.display = "block";
  }

  closeBtn.onclick = function () {
    navModal.style.display = "none";
  }

  //
  var gridBtn = document.getElementById("gridBtn");
  var main = document.getElementById("main");
  gridBtn.onclick = function () {
    if (main.className.indexOf("space-action") > -1) {
      main.className = main.className.replace("space-action","");
    } else {
      main.className = main.className + " space-action";
    }
  }

  var navModalLiPhoto = document.getElementById("navModalLiPhoto");
  navModalLiPhoto.onclick = function () {
    navModal.style.display = "none";
  }

  var ul = document.getElementById("ul");
  // console.log(ul.children);
  for (var li in ul.children) {
    console.log(li);
    li.onclick = function () {
      navModal.style.display = "none";
    }
  }
}
