class Person {
    constructor(firstName = "Jon", lastName = "Doe", age = 0, gender = "male"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(){
    alert(`Hello, my  name is ${this.lastName}, ${this.fullName()}. `)
}
}
    let agent = new Person("James","Bond");
    agent.sayHi();
    let incognito = new Person();
    incognito.sayHi();