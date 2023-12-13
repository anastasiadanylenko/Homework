"use strict";

class FoodProduct {
    #isOrganic;

    constructor(name, price, category, expirationDate) {

        this.name = name;
        this.price = price;
        this.category = category;
        this.expirationDate = expirationDate;
        this.#isOrganic = 'true';
    }

    getInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }

    getExpirationDate() {
        console.log(`Expiration date of your ${this.name} is ${this.expirationDate}`);
    }

    calculateDiscount(discount) {
        const discountedPrice = this.price - (this.price * (discount / 100));
        console.log(`Discounted Price: ${discountedPrice.toFixed(2)}`);
    }

    getIsOrganic() {
        console.log(`Your ${this.name} is ${this.#isOrganic ? 'organic' : 'not organic'}`);
    }
}

class Fruit extends FoodProduct {
    #taste;

    constructor(name, price, category, expirationDate, color, vitamins) {
        super(name, price, category, expirationDate);
        this.color = color;
        this.vitamins = vitamins || [];
        this.#taste = 'sweet';
    }

    getDescription() {
        console.log(`Fruit: ${this.name}, color: ${this.color}, taste: ${this.#taste}`)
    }

    addVitamin(vitamin) {
        this.vitamins.push(vitamin);
        console.log(`This ${this.name} contain such vitamins: ${vitamin}`);
    }
}

class Raspberry extends Fruit {
    #size;

    constructor(name, price, category, expirationDate, color, vitamins, ripeness) {
        super(name, price, category, expirationDate, color, vitamins);
        this.#size = 'small';
        this.ripeness = ripeness;
      this.vitamins = vitamins || [];

    }

    getSize() {
        console.log(`Size: ${this.#size}`);
    }

    getRipeness() {
        console.log(`Ripeness Level: ${this.ripeness}`)
    }
    addMoreVitamins(newVitamins) {
        this.vitamins.push(...newVitamins);
        console.log(`This ${this.name} contain such vitamins: ${this.vitamins}`);
    }
}

class Banana extends Fruit {
    #length;

    constructor(name, price, category, expirationDate, color, vitamins, ripeness, sweetness) {
        super(name, price, category, expirationDate, color, vitamins, ripeness);
        this.sweetness = sweetness;
        this.#length = 10;
        this.ripeness = ripeness;
    }
    howToEat() {
        console.log(`You just need to peel the banana and end enjoy it ${this.sweetness} taste`)
    }

    checkTheLengthOfBanana() {
        if (this.#length <= 12) {
            console.log(`This ${this.name} is ${this.ripeness}`);
        } else {
            console.log(`The ${this.name} is very tasty`)
        }
        }
        addMoreVitamins(newVitamins) {
            this.vitamins.push(...newVitamins);
            console.log(`This ${this.name} contain such vitamins: ${this.vitamins}`);
        }
    }
    


const almond = new FoodProduct("almond", 200, "nut", "2025-12-31");

almond.getInfo();
almond.getExpirationDate();
almond.calculateDiscount(10);
almond.getIsOrganic();

const peach = new Fruit("peach", 50, "peach", "2023-12-31", "red", []);
peach.getDescription();
peach.addVitamin(["A"]);

const raspberry = new Raspberry("raspberry", 30, "raspberry", "2023-12-31", "pink", ["A"], "ripe");

raspberry.getSize();
raspberry.getRipeness();
raspberry.addMoreVitamins(["E"])

const banana = new Banana("banana", 15, "banana", "2023-12-31", "yellow", ["A", "E"], "semi-ripe", "sweet");

banana.howToEat();
banana.checkTheLengthOfBanana();
banana.addMoreVitamins(["B"]);

