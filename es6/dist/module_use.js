'use strict';

var _module = require('./module.js');

var _circle = require('./circle');

function setName() {
  return _module.firstName + ' ' + _module.lastName + ' ' + _module.year;
}
console.log(setName());

console.log('圆面积：' + (0, _circle.area)(4));
console.log('圆周长：' + (0, _circle.circumference)(14));