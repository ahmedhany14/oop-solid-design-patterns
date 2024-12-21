import {IDataBase} from "./IDataBase";

export abstract class DataBaseService {
    constructor(
        protected dataBase: IDataBase
    ) {
    }

    abstract fetchData(): void;
}