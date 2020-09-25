/*

Суммирование значений свойства из 
массива объектов

Напиши функцию calculateTotalPrice(allProdcuts, 
productName), которая получает массив объектов 
и имя продукта (значение свойства name). 

Возвращает общую стоимость продукта (цена 
умноженная на количество).

Вызовы функции для проверки работоспособности 
твоей реализации.

// calculateTotalPrice(products, 'Радар')); // 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800

*/
// /*

// Autocheck

function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let totalPrice = 0;

  for (const idx of array) {
    if (idx.name === prop) {
      totalPrice += idx.price * idx.quantity;
    }
  }
  return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

// */
/*

// IDE

function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  //   console.log(prop);
  //   console.table(array);

  let totalPrice = 0;

  for (const idx of array) {
    //  console.log(idx);
    //  console.log("idx.name", idx.name);
    //  console.log("idx.price", idx.price);

    if (idx.name === prop) {
      totalPrice += idx.price * idx.quantity;
    }
  }
  return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

*/
