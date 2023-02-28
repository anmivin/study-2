/* У нас есть объект:


Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };*/

let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false