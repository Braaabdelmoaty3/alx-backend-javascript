class Currency{
    constructor(code, name){
        this._code = code
        this._name = name
    }

    get code(){
        return this._code
    }

    set code(newCode){
        if (typeof code === "string"){
            return this._code
        } else{
            throw typeError ("code must be sting")
        }
    }

    get name(){
        return this._name
    }
    set name(newName){
        if(typeof newName === "string"){
            return this._name
        } else {
            throw typeError("name must be stirng")
        }
    }


    static displayFullCurrency(name,code){
        return name (code)
    }
}
