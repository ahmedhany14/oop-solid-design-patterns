import {IDataBase} from "./IDataBase";

export class SqliteService implements IDataBase {
    connect() {
        console.log('Sqlite connected');
    }

    disconnect() {
        console.log('Sqlite disconnected');
    }

    query() {
        console.log('Sqlite query executed');
    }
}