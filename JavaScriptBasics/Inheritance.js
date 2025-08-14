import Person from './JavascriptBasics.js';
class Employee extends Person{
    constructor(firstname,lastname,empid){
        super(firstname,lastname)
        this.empid=empid
    }

    getDetails(){
        return `${this.Fullname_M()}, Employee id:${this.empid}`
    }
}

const emp = new Employee("John","Cena",12)
console.log(emp.getDetails())


