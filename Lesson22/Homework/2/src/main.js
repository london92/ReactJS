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
    alert(`Hello, my  name is ${this.fullName()}.`)
}
}
class User extends Person{
    constructor(firstName, lastName, age, gender,signUpDate = 0, id,){
        super(firstName,lastName,age,gender);
        this.signUpDate = signUpDate;
        this.id = id

    }
    // set signUpDate(sign = 0){
    //     this.signDate = sign;
    // }
    // get signUpDate(){
    //     return this.signDate
    // }

}
    let user_1 = new User("Jim","Carey",44,"male",1,1);
    let user_2 = new User("Tom","Crouze",34,"male",2,2);
    let user_3 = new User("Angelina","Djoli",35,"female",3,3);
    let user_4 = new User("Kianu","Rivz",46,"male",4,4);

    let users = [user_1,user_2,user_3,user_4]
   
    export {users}

   