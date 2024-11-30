interface IMachine {
    print(doc: string): void;
    fax(doc: string): void;
    scan(doc: string): void;
}


// class should be responsible for printing only
class OldFashionedPrinter implements IMachine {
    print(doc: string): void {
        /*
            implement some logic....
        */
    }

    fax(doc: string): void {
        /*
            implement some logic....
        */
    }

    scan(doc: string): void {
        /*
            implement some logic....
        */
    }
}

/*
in this case, we have a printer that implements the IMachine interface, but it doesn't need all the methods that the interface has.
but it still has to implement them, which is a violation of the Interface Segregation Principle.
*/