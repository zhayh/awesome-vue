"use strict";

// var btns = document.getElementsByTagName("input");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     alert(i);
//   }
// }

// let
var btns = document.getElementsByTagName("input");

var _loop = function _loop(i) {
  btns[i].onclick = function () {
    alert(i);
  };
};

for (var i = 0; i < btns.length; i++) {
  _loop(i);
}