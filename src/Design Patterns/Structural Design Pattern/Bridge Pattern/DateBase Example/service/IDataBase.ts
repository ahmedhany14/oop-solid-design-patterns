export interface IDataBase {
    connect(): void;

    disconnect(): void;

    query(): void;
}