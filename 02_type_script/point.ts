
export class Point {
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
