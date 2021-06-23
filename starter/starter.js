class Employee {
    constructor(name,occupation){
        this.name = name;
        this.occupation = occupation;

    }
    sayName(){
        console.log(this.name)
    }
    sayOccupation(){
        console.log(this.occupation)
    }

}


let employee = new Employee("Ben","President")

let boundName = employee.sayName.bind(employee)

let boundOccupation = employee.sayOccupation.bind(employee)

globalThis.setTimeout(boundName,2000)

globalThis.setTimeout(boundOccupation,6000)
