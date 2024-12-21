import {DataBaseService} from "./service/DataBase.service";
import {IDataBase} from "./service/IDataBase";

import {SqliteService} from "./service/sqlite.service";
import {MongoService} from "./service/mongo.service";

class ClientDateBase extends DataBaseService {

    constructor(protected dataBase: IDataBase) {
        super(dataBase);
    }

    fetchData(): void {
        this.dataBase.connect();
        this.dataBase.query();
        this.dataBase.disconnect();
    }
}


const sqlite = new SqliteService();
const mongo = new MongoService();

const clientSqlite = new ClientDateBase(sqlite);
const clientMongo = new ClientDateBase(mongo);

clientSqlite.fetchData();

console.log('----------------------------------');

clientMongo.fetchData();