
// 1) Product class that will be built by the builder
class Product {
    parts: string[] = [];

    add(part: string) {
        this.parts.push(part);
    }

    show() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}


// 2) Builder interface that will be implemented by the concrete builder
interface Builder {
    buildPartA(): void;
    buildPartB(): void;
    buildPartC(): void;
    getResult(): Product;
}


// 3) Concrete builder that will implement the builder interface
class ConcreteBuilder implements Builder {
    private product: Product = new Product();


    constructor() { // constructor is used to reset the product
        this.reset();
    }

    reset() { // defaine a new product
        this.product = new Product();
    }


    // build the parts of the product
    buildPartA() {
        this.product.add('Part A1');
    }

    buildPartB() {
        this.product.add('Part B1');
    }

    buildPartC() {
        this.product.add('Part C1');
    }


    // get the product after building and reset the product
    getResult() {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {

    constructor(
        private builder: Builder) { }

    buildMinimalViableProduct() {
        this.builder.buildPartA();
    }

    buildFullFeaturedProduct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }

    getProduct() {
        return this.builder.getResult();
    }

}

const builder = new ConcreteBuilder();
const director = new Director(builder);
director.buildMinimalViableProduct();
const minimalProduct = builder.getResult();

minimalProduct.show();

director.buildFullFeaturedProduct();
const fullFeaturedProduct = builder.getResult();

fullFeaturedProduct.show();