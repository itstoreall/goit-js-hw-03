/*

Суммирование значений свойств объекта

Напиши функцию countTotalSalary(employees) 
принимающую объект зарплат. Функция считает 
общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, 
имеет вид "имя":"зарплата".

*/
// /*

// Autocheck

const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let totalSalary = 0;

  for (const employee in employees) {
    totalSalary += employees[employee];
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

// */
/*

// IDE

const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let totalSalary = 0;

  for (const employee in employees) {
    console.log("- key:", employee);
    console.log("- value:", employees[employee]);

    totalSalary += employees[employee];
    // console.log("- totalSalary:", totalSalary);
  }

  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

*/
