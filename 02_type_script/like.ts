export class Like {
    constructor(private _numberOfLikes: number = 0, private _selected: boolean = false){}


    switchLike(){
        this._selected = !this._selected;
        if (this._selected){
            this._numberOfLikes++;
        }else{
            this._numberOfLikes--;
        }
    }
    addLike(){
        this._numberOfLikes++;
        this._selected = true;
    }

    removeLike(){
        this._numberOfLikes--;
        this._selected = false;
    }
}

