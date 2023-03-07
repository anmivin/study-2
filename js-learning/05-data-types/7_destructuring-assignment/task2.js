/* У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

const topSalary = (salaries) => {
  let sal = 0;
  let name = "";

  for (const [key, val] of Object.entries(salaries)) {
    if (sal < val) {
      sal = val;
      name = key;
    }
  }
};
