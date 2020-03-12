// eS6模块化
// 输出对象
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export { firstName, lastName, year };
// 输出函数
export function area (radius) {
  return Math.PI * radius * radius;
}
export function circumference (radius) {
  return 2 * Math.PI * radius;
}

