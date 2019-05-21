var Robot = function (name) {
    this.name = name;
    }

function add (op1, op2) {
    this.name = this.name || 'Human';
    return this.name + ' can count to ' + (op1 + op2);
    }

var voltron = new Robot('Voltron');

// #1 Выведите результат сложения 0 и 1
// "Human can count to 1"
// #2 Выведи результат сложения Voltron 1 и 2 используя call
// “Voltron can count 3”
// #3 Выведи результат сложения Voltron 20 и 30 используя apply
// “Voltron can count 50”
// #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
// “Voltron can count drinkingbeer”


function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }

function showName() {
    console.log(add(0,1));
    console.log(add.call(voltron, 1, 2))
    console.log(add.apply(voltron, [20, 30]));
    
    let a = add.bind(voltron);
    console.log(a("drinking", "beer"));

    let b = bind(add, voltron);
    console.log(b("drinking", "beer"));)
}

showName();
