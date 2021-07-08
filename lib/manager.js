const Employee = require("./lib/employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email) 
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;