/*

Поиск наибольшего значения среди свойств объекта

Напиши функцию findBestEmployee(employees), которая 
принимает объект сотрудников и возвращает имя самого 
продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся как 
свойства объекта в формате "имя":"кол-во задач".

*/
// /*

// Autocheck

const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let bestEmployee = "";
  let maxTasks = 0;

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

// */
/*

// IDE

const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  //   console.log(employees);

  let bestEmployee = "";
  let maxTasks = 0;

  for (const employee in employees) {
    //  console.log("Имя: ", employee);
    //  console.log("Один: ", employees[employee]);
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
      // console.log("maxTasks:", maxTasks);
      // console.log("bestEmployee:", bestEmployee);
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

*/
