export class LikeComponent{
    constructor(private _likesCount: number = 0, private _isSelected: boolean = false){}


    get likesCount(){
        return this._likesCount
    }

    get isSelected(){
        return this._isSelected
    }

    onClick(){
        this._likesCount += this._isSelected ? -1 : 1
        this._isSelected = !this._isSelected
    }
}