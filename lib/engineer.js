const Employee = require("./lib/employee.js")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        this.gitHub = gitHub;
        
    super(name, id, email) 
    }

    getGitHub() {
        return this.gitHub;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
