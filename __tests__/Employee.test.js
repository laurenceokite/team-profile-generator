const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
    const employee = new Employee('Dave', 'example@example.com');

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('example@example.com');
});

test('gets employee name', () => {
    const employee = new Employee('Dave', 'example@example.com');

    const name = employee.getName();

    expect(name).toBe('Dave');
});

test('gets employee email', () => {
    const employee = new Employee('Dave', 'example@example.com');

    const email = employee.getEmail();

    expect(email).toBe('example@example.com');
});

test('gets employee ID', () => {
    const employee = new Employee('Dave', 'example@example.com');

    employee.id = 1;

    const id = employee.getId();

    expect(id).toBe(1);
});

test('gets employee role', () => {
    const employee = new Employee('Dave', 'example@example.com');

    employee.role = 'Manager';

    const role = employee.getRole();

    expect(role).toBe('Manager');
})

