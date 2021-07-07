const Employee = require("./lib/employee.js")

class Intern extends Employee {
    constructor(gitHubUserName) {
        this.gitHubUserName = gitHubUserName;
        }

    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getGitHubUserName() {
        return this.gitHubUserName;
    }
    
    getRole() {
        return "Engineer";
    }
}

