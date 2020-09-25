/*

Подсчет количества свойств в объекте

Напиши функцию countProps(obj), которая возвращает 
число - количество свойств в объекте.

Циклы не должны использоваться

*/
// /*

const countProps = function (obj) {
  "use strict";
  // Write code under this line
  let arr = Object.keys(obj);
  return arr.length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// */
/*

// IDE

const countProps = function (obj) {
  "use strict";
  // Write code under this line
  //   console.log(obj);
  let arr = Object.keys(obj);
  //   console.log(arr);
  return arr.length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

*/
