function read(a, b) {
  this.a = a,
  this.b = b,
};
function sum() {
  return this.a + this.b
};
function mul() {
  return  this.a * this.b
};

let calculator = {
    read(),
    a,
    b,
    sum(),
    mul(),
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
