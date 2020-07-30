const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor (name, email, office) {
        super(name, email);

        this.role = 'Manager';
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Intern;