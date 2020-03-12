'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.area = area;
exports.circumference = circumference;
// eS6模块化
// 输出对象
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;
// 输出函数

function area(radius) {
  return Math.PI * radius * radius;
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}