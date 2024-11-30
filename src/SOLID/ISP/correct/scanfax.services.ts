import { IPrinter, IFax, IScanner } from "./types/IMachine";


class ScanFaxMachine implements IScanner, IFax {

    scan(doc: string): void {
        /*
            implement some logic....
        */
    }

    fax(doc: string): void {
        /*
            implement some logic....
        */
    }

}