/* Возможно ли создать функции A и B, чтобы new A() == new B()? */

let objects = {};
function A() {
  return a;
}
function B() {
  return a;
}

let a = new A();
let b = new B();

//( a == b ) === true;
