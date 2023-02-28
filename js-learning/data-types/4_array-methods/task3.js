/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1] */

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((num) => {
    if (num < a || num > b) {
      arr.splice(num, 1);
    }
  });
};
