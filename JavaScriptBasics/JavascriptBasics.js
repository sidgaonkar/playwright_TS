//object is collection of properties
let person ={
    Firstname :'John',
    LastName : 'Day',
    Gender:'Male',
    BirthDate:'23/01/1997',
    FullName:function(){
        console.log(this.Firstname+this.LastName)
    }
}

console.log(`Firstname:${person.Firstname} Lastname:${person.LastName}`)
for(let i in person){
    console.log(person[i])//extrating the values from the key
}
console.log(person.FullName())

//creating the Class
export default class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname
    }
    get fullname(){
        return `Full name from getter method is ${this.firstname} ${this.lastname}`
    }

    Fullname_M(){
    return ` Fullname and lastname from function ${this.firstname} ${this.lastname}`
    }
     
     //getter method
     get location(){
        return "Canada";
     }

}

//creating the object
// let person1 = new Person("Day","john")
// console.log(person1.location)
// console.log(person1.fullname) //when calling getter method dont use ()
// let m_fullname = person1.Fullname_M();
// console.log(m_fullname)




