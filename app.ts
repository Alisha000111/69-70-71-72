enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  const today: Days = Days.Wednesday;
  console.log(`Today is ${Days[today]}`);
  interface PersonEx1 {
    name: string;
    age: number;
  }
  const John: PersonEx1 = {
    name: "John",
    age: 30,
  };
  interface PersonEx2 {
    name: string;
    age: number;
    greet(message: string): void;
  }
  const sarah: PersonEx2 = {
    name: "sarah",
    age: 30,
    greet(message: string) {
      console.log(`${this.name} says: ${message}`);
    },
  };
  Sarah.greet("Hello, TypeScript!");
  interface Settings {
    readonly theme: boolean;
    font: string;
  }
  interface Settings {
    sidebar: boolean;
  }
  interface Settings {
    external: boolean;
  }
  let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
  };
  const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
interface PersonExInterface {
    name: string;
    age: number;
  }
  type PersonExType = {
    name: string;
    age: number;
  };
  interface AnimalExInterface {
    type: string;
  }
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
}
  type AnimalExType = {
    type: string;
  };
  type Monkey = AnimalExType & {
    bark(): void;
  };
  const labrador: Monkey = {
    type: "monkey",
    bark() {
      console.log("Woof!");
    },
  };
  interface Car {
    brand: string;
  }
  interface Car {
    model: string;
  }
  const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };
  class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
  const product1 = new Product(1, "Widget", 20.0);
  console.log(product1.getProductInfo());
  class MyClassPublic {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); 
class MyClassPrivate {
    private secret: string
    constructor(secret: string) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret); 
    }
}
const instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret(); 
class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");
childEx.introduceFamily();
class ProductExAccessors {
    private _price: number;
    constructor(private id: number, private name: string) {
      this._price = 0; 
    }
    get price(): number {
      return this._price;
    }
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  }
  const productEx = new ProductExAccessors(1, "Widget");
  console.log(productEx.getProductInfo()); 
  productEx.price = 20.0;
  console.log(productEx.getProductInfo());
  productEx.price = -5; 
  class ProductStaticMembers {
    private static nextId: number = 1;
    constructor(private id: number, private name: string) {}
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  const product1static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Widget"
  );
  const product2static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Gadget"
  );
  console.log(product1static.getProductInfo());
  console.log(product2static.getProductInfo());
  abstract class AbstractItem {
    private static nextId: number = 1;
    constructor(public id: number, protected name: string) {}
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
    abstract getItemInfo(): string;
  }
  class Item extends AbstractItem {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getItemInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
  const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");
  console.log(item1.getItemInfo());
  console.log(item2.getItemInfo()); 
  abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
  }
  const entity1: AbstractEntity = new Entity(
    AbstractEntity.generateNextId(),
    "Widget"
  );
  const entity2: AbstractEntity = new AnotherEntity(
    AbstractEntity.generateNextId(),
    "Gadget"
  );
  console.log(entity1.getEntityInfo()); 
  console.log(entity2.getEntityInfo()); 
function returnType<T>(val: T): T {
    return val;
  }
  const numValue: number = returnType<number>(100);
  const strValue: string = returnType<string>("Elzero");
  const boolValue: boolean = returnType<boolean>(true);
  const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);
  console.log(`Number Value: ${numValue}`);
  console.log(`String Value: ${strValue}`);
  console.log(`Boolean Value: ${boolValue}`);
  console.log(`Array Value: ${arrValue}`);
  function returnTypeEx<T>(val: T): T {
    return val;
  }
  console.log(returnTypeEx<number>(100)); 
  console.log(returnTypeEx<string>("Elzero")); 
  const returnTypeArrowSyntax = <T>(val: T): T => val;
  console.log(returnTypeArrowSyntax<number>(100));
  console.log(returnTypeArrowSyntax<string>("Elzero")); 
  function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  console.log(testType<number>(100));
  console.log(testType<string>("Elzero"));
  function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
  }
  console.log(multipleTypes<string, number>("Osama", 100));
  console.log(multipleTypes<string, boolean>("Elzero", true));
  class User<T = string> {
    constructor(public value: T) {}
    show(msg: T): void {
      console.log(`${msg} - ${this.value}`);
    }
  }
  let userOne = new User<string>("Elzero");
  console.log(userOne.value); 
  userOne.show("Message"); 
  let userTwo = new User<number | string>(100);
  console.log(userTwo.value); 
  userTwo.show("Message"); 
  interface Book {
    itemType: string;
    title: string;
    isbn: number;
  }
  interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  class Collection<T> {
    public data: T[] = [];
    add(item: T): void {
      this.data.push(item);
    }
  }
  let itemOne = new Collection<Book>();
  itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
  itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
  console.log(itemOne);
  let itemTwo = new Collection<Game>();
  itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
  console.log(itemTwo);
  
  


  