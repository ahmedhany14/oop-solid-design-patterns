import {IDataBase} from "./IDataBase";

export class MongoService implements IDataBase {
    connect() {
        console.log('Mongo connected');
    }

    disconnect() {
        console.log('Mongo disconnected');
    }

    query() {
        console.log('Mongo query executed');
    }
}