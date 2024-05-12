var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Wednesday;
console.log("Today is ".concat(Days[today]));
var John = {
    name: "John",
    age: 30,
};
var Sarah = {
    name: "Sarah",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("Hello, TypeScript!");
var userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
var imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product1 = new Product(1, "Widget", 20.0);
console.log(product1.getProductInfo());
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.name = name;
    }
    return MyClassPublic;
}());
var instancePublic = new MyClassPublic("John");
console.log(instancePublic.name);
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret);
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret();
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var parentEx = new Parent("Smith");
var childEx = new Child("Johnson");
childEx.introduceFamily();
var ProductExAccessors = /** @class */ (function () {
    function ProductExAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    Object.defineProperty(ProductExAccessors.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    return ProductExAccessors;
}());
var productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo());
productEx.price = 20.0;
console.log(productEx.getProductInfo());
productEx.price = -5;
var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.generateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
var product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
var product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractItem.generateNextId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Item;
}(AbstractItem));
var item1 = new Item(AbstractItem.generateNextId(), "Widget");
var item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
var entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());
function returnType(val) {
    return val;
}
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log(returnTypeEx("Elzero"));
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
console.log(testType("Elzero"));
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
var userOne = new User("Elzero");
console.log(userOne.value);
userOne.show("Message");
var userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("Message");
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
var itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
