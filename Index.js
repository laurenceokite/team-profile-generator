const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Manager name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Manager e-mail:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Office number:'
    },
    {
        type: 'confirm',
        name: 'office',
        default: false,
        message: 'Would you like to add another Manager?'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Engineer name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Engineer e-mail:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:'
    },
    {
        type: 'confirm',
        name: 'office',
        default: false,
        message: 'Would you like to add another Engineer?'
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Intern name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Intern e-mail:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Current school:'
    },
    {
        type: 'confirm',
        name: 'office',
        default: false,
        message: 'Would you like to add another Intern?'
    }
];

const employees = [];
const employeeId = 0;

function promptManagers() {
    inquirer.prompt()
}
