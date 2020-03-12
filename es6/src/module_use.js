import { firstName, lastName, year } from './module.js';
import { area, circumference } from './module';

function setName () {
  return firstName + ' ' + lastName +　' ' + year;
}
console.log(setName());

console.log('圆面积：' + area(4).toFixed(2));
console.log('圆周长：' + circumference(14).toFixed(2));

