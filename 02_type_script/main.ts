// function log(message){
//     console.log(message);
// }
// var message = 'Hello World!';
// log(message);

// var number = 10; // Variable 
// let count = 1; // Final

// console.log(number);
// console.log(count);

// function doSomething(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log("Finally: "+ i);
    
// }

// doSomething(); 

// Types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[] = [1, true, 'Ahmed', 49.23, ["Programming", "Database"], {"username": "Ahmed Sami", "email": "ahmed.sami@gmail.com"}];

console.log(f)


enum Color {Red, Green, Blue};

console.log(Color.Red, Color.Green, Color.Blue);

let message = 'abc';
let characters = message.split('');
console.log(characters);

// Type Assertion
let msg;
msg = 'abcd';
let endsWith = (<string>msg).endsWith('d');
let alternativeWay = (msg as string).endsWith('c');
console.log(endsWith, alternativeWay);

// Arrow Function
let log = function(message: any){
    console.log(message);
}

let doLog = (message: any)=> console.log(message);



