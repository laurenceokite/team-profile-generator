const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const generateHtml = require("./src/generateHtml.js");

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
        name: 'confirmAddNew',
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
        name: 'confirmAddNew',
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
        name: 'confirmAddNew',
        default: false,
        message: 'Would you like to add another Intern?'
    }
];

const employees = [];
let employeeId = 0;
let teamName;

const promptManagers = function() {
    employeeId++
    inquirer.prompt(managerQuestions)
    .then(info => {
        const manager = new Manager(info.name, info.email, info.office);
        manager.id = employeeId;
        employees.push(manager);
        if (info.confirmAddNew) {
            return promptManagers();
        } else {
            promptEngineers();
        }
    })

};

const promptEngineers = function() {
    employeeId++
    inquirer.prompt(engineerQuestions)
    .then(info => {
        const engineer = new Engineer(info.name, info.email, info.github);
        engineer.id = employeeId;
        employees.push(engineer);
        if (info.confirmAddNew) {
            return promptEngineers();
        } else {
            promptInterns();
        }
    });
};

const promptInterns = function() {
    employeeId++
    inquirer.prompt(internQuestions)
    .then(info => {
        const intern = new Intern(info.name, info.email, info.school);
        intern.id = employeeId;
        employees.push(intern);
        if (info.confirmAddNew) {
            return promptInterns();
        } else {
            writeToFile()
        }
    });
};

function writeToFile() {
    const html = generateHtml(teamName, employees)
    
    fs.writeFile('./dist/index.html', html, err => {
       if (err) throw new Error(err);

       console.log('Profile created in "dist" folder');
     });

} 

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Team Name:'
        }
    ]).then(info => {
        if (info.teamName) {
            teamName = info.teamName;
        } else {
            teamName = 'My Team'
        }
        promptManagers();
    });
};

init();
