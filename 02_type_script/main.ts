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

// // Types
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[];
// let f: any[] = [1, true, 'Ahmed', 49.23, ["Programming", "Database"], {"username": "Ahmed Sami", "email": "ahmed.sami@gmail.com"}];

// console.log(f)


// enum Color {Red, Green, Blue};

// console.log(Color.Red, Color.Green, Color.Blue);

// let message = 'abc';
// let characters = message.split('');
// console.log(characters);

// // Type Assertion
// let msg;
// msg = 'abcd';
// let endsWith = (<string>msg).endsWith('d');
// let alternativeWay = (msg as string).endsWith('c');
// console.log(endsWith, alternativeWay);

// // Arrow Function
// let log = function(message: any){
//     console.log(message);
// }

// let doLog = (message: any)=> console.log(message);

// // Interfaces
// let drawPoint = (point: Point) => {
//     // Your code logic
//     console.log(point);
// }

// drawPoint({
//     x: 2, 
//     y: 3
// });

// interface Point{
//     x: number
//     y: number
//     draw: () => void
//     getDistance: () => number
// }

// Classes
class Point {
    constructor(private _x?: number, private _y?: number){}

    get x(){
        return this._x!
    }

    set x(x: number){
        if(x < 0)
            throw new Error('value cannot be less than zero')
        this._x = x
    }

    get y(){
        return this._y!
    }

    set y(y: number){
        if(y < 0)
            throw new Error('value cannot be less than zero')
        this._y = y
    }

    draw(){
        console.log("(X: ", this._x, ", Y: ", this._y, ")");
    }


}

// let point: Point
// point = new Point()
let point = new Point(7, 8)
let point2 = new Point()

// point.draw()
point2.x = 14
point2.y = 16
console.log(point2.x);
console.log(point2.y);
console.log(point)

