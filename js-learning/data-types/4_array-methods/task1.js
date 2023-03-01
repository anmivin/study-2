/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно. */

const camelize = (str) => {
  return str
    .split("-")
    .map((char, ind) =>
      ind !== 0 ? char[0].toUpperCase + char.slice(1) : char
    )
    .join("");
};
