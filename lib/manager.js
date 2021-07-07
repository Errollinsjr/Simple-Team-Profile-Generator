const Employee = require("./lib/employee.js")

class Manager extends Employee {
    constructor(officeNumber) {
    this.officeNumber = officeNumber;
    }

    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

