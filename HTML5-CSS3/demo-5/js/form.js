window.onload = function () {
  var es = document.getElementsByClassName('form-control');
  for (var i = 0; i < es.length; i++) {
    // 获得焦点
    es[i].onfocus = function () {
      this.parentNode.className += ' control-focus';
    };
    // 失去焦点
    es[i].onblur = function () {
      var value;
      if (this.tagName === 'SELECT') {
        value = this.options[this.selectedIndex].text;
      } else {
        value = this.value;
      }
      console.log(value);
      if (value != '') {
        this.parentNode.className = this.parentNode.className.replace(' control-focus', ' control-heiglight');
      } else {
        this.parentNode.className = this.parentNode.className.replace(' control-focus', '');
        this.parentNode.className = this.parentNode.className.replace(' control-heiglight', '');
      }

    };
  }
}
