const Employee = require("./lib/employee.js")

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        
    //employee constructor    
    super(name, id, email) 
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;

