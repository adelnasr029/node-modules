class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    gretting(){
        console.log(`My name ${this.name} and I am ${this.age}`)
    }
};

module.exports = Person;