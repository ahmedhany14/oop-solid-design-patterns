export class GenericBuilder<T> {
    private instance: Partial<T> = {};

    set<K extends keyof T>(key: K, value: T[K]): GenericBuilder<T> {
        this.instance[key] = value;
        return this;
    }

    build(): T {
        const builtInstance = this.instance as T;

        if(Object.keys(builtInstance as Object).length === 0) {
            throw new Error("You must set at least one property");
        }
        return builtInstance;
    }
}