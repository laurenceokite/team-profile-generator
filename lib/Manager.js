const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor (name, email, office) {
        super(name, email);

        this.role = 'Manager';
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;