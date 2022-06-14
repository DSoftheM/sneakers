import { ApiTitleEnum } from "../Enums/Enums";
import { Sneaker } from '../Interfaces/Interfaces'

export default class DataBase {
    constructor(
        private _url: string,
    ) { }


    public async getData(title: ApiTitleEnum): Promise<Array<Sneaker>> {
        return (await fetch(this._url + title)).json();
    }


}