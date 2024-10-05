/* eslint-disable */
import Currency from "./3-currency";

export default class Pricing{
    constructor (amount, currency){
        this._amount = amount
        this._currency = currency
    }
    // amount
    get amount(){
        this._amount
    }
    set amount(newAmount){
        this._amount = newAmount;
    }

    //currency
    get currency(){
        this._currency
    }
    set currency(newCurrency){
        this._currency = newCurrency;
    }

    displayFullPrice(){
        return `${this._amount} ${this._currency.name} ${this._currency.code}`
    }
    static convertPrice(amount, conversionRate){
        if (typeof amount === "number"){
            return amount * conversionRate;
        } else {
            throw typeError ("amount must be number");
        }
    }
}