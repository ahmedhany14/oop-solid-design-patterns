class Singleton{
    private static instance: Singleton;

    private data: number = 0;
    // will be called externally only once even if we create multiple instances of the class
    private constructor(){
        console.log('Hello Singleton')
    }

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public setData(data: number){
        this.data = data;
    }

    public getData(){
        return this.data;
    }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj1.setData(10);

console.log(obj1.getData()); // 10
console.log(obj2.getData()); // 10

console.log(obj1 === obj2); // true