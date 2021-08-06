'use strict' //строгий режим 
// const birthday = new Date (2012, 10, 10);
// //let age = someCode(birthday);

// function someCode(value) {
//     return new Date (new Date() - value);


// let age = someCode(birthday);
// console.log(age);
// <span style="color:red";
// // let = 'Costs';
// // const (buy_car),
// // Costs(buy_eat)
// // Costs(bye_woter);let userName;
let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

userName = prompt("Ваше Имя?"); 
while (userName === null){
alert('погел ты нахер, козел');
userName = prompt("Ваше Имя?"); 
}
const choice = confirm(`Хотите работать в Epam, ${userName}? Нажмите Ok если да, или отмена, если не хотите`);
//const choice = confirm("Do you want to work in Epam?");
const answer = choice ? 'Ты будешь работать если будешь стремится к этому!' : 'As you wish!';
alert(answer);
