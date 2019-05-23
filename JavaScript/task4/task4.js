// А) Функция должна вывести ‘hi’ через 2 секунды

function delay(duration){
    return new Promise((resolve, reject)=>
    
    setTimeout(() => resolve(), duration)
    )
}

function logHi(){
    console.log('hi!');
}

delay(2000).then(logHi);


// Б) Одна из особенностей Promise, в том что они могут бесконечно вызывать .then()


new Promise(function(resolve, reject) {
    setTimeout(() => resolve(10), 3000);})                      // должно через 3 секунды передать дальше значение - 10

    .then(function(result){
        console.log(result);                                    // должно вывести в console значение полученное
        return result * 2;                                      // и передать дальше увеличенное на 2 
    })                                       

    .then(function(result){
        console.log(result);                                    // должно вывести в console значение полученное
        return new Promise((resolve, reject) => 
        {
            setTimeout(() => resolve(result * 2), 2000);        // и передать дальше увеличенное на 2 через 2 секунды 
        })                                      
    })

    .then(function(result){
        console.log(result);                                    // должно вывести конечный результат
    });



    /*

    В) Написать Promise который выводит console.log в случае если время
    выполнения не превысило 2 секунд, и console.error в случае если
    превысило. Время должно определяться случайным образом,
    использовать внутренний обработчик ошибок для Promise

    */

function RandomInterval(){
    var rand = 1 + Math.random() * (10 + 1 - 1);
    rand = Math.floor(rand);
    return rand * 1000;
}

function twoSec(){
    let dur = RandomInterval();
    return new Promise((resolve, reject)=>{
        if (dur <= 2000){
            return resolve("Success! Took less than 2sec");
        }
        else return reject(new Error("Took more than 2sec"));
    });
}

twoSec()
  .then(result => console.log(result))
  .catch(error => console.log(error));


  /*
  
    Г) Программа должна генерировать от 1 до 10 асинхронных функций,
    которые должны вывести в консоль номер функции и через сколько
    времени (так же определяется случайно от 1 до 10) сработал в ней
    console.log. Все эти функции должны работать параллельно. После
    окончания работы этих функций должен вывестись console.log

    поздравляющий вас с окончанием работы и отображающий сколько
    времени понадобилось на выполнение (максимальное значение 10
    конечно)


*/

function RandomOneToTen(){
    var rand = 1 + Math.random() * (10 + 1 - 1);
    rand = Math.floor(rand);
    return rand;
}

async function asyncFunc(num){
return new Promise(function(resolve, reject){
    let dur = RandomOneToTen() * 1000;
    setTimeout(() => 
    {
        console.log(`Function number is ${num + 1} and it took it ${dur / 1000}sec to start`);
        return resolve(dur);
    }
    , dur);
});
}


let rand = RandomOneToTen();
let funcArr = [];

for (i = 0; i < rand; i++){
    funcArr.push(asyncFunc(i));
}

const timing = callback => {
    const start = performance.now();
  
    return Promise.resolve(callback())
      .finally(() => console.log(`All async functions took ${performance.now() - start} msec to run`));
  }

const asycOperation = () => Promise.all(funcArr);

timing(asycOperation);
