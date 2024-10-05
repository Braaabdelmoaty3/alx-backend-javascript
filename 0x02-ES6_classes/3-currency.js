/* eslint-disable */
export default class Currency{
    constructor(code, name){
        this._code = code
        this._name = name
    }

    get code(){
        this._code;
    }

    set code(newCode){
        this._code = newCode;
    }

    get name(){
        this._name
    }
    set name(newName){
        this._name = newName
    }


    displayFullCurrency(name,code){
        return `${this.name} (${this.code})`;
    }
}
