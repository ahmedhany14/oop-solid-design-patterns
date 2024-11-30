/*
Interface Segregation Principle(ISP) -
    A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.
    In other words, the interface should be broken down into smaller, more specific interfaces so that clients will only have to know about the methods that are of interest to them.
*/

export interface IPrinter {
    print(doc: string): void;
}

export interface IFax {
    fax(doc: string): void;
}

export interface IScanner {
    scan(doc: string): void;
}