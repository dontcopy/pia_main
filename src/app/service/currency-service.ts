import { Currency } from "../model/currency";
import { Injectable } from "@angular/core";
import { Currencies } from "../mockData/mock-currency";

@Injectable()
export class CurrencyService{
    getCurrency():Promise<Currency[]>
    {
        return Promise.resolve(Currencies);
    }
}