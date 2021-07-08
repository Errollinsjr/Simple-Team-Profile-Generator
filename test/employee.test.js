const Employee = require('../lib/Employee');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const employee = new Employee('Mike', 1, 'mike@gmail.com');

test('creates a employee object', () => {
    expectToBe(employee.name,'Mike');
    expectNum(employee.id);
    expectStr(employee.email, '@');
});

test('gets employee name', () => {
    expectStr(employee.getName(), `${employee.name}`);
});

test('gets employee ID', () => {
    expectToBe(employee.getId(), employee.id);
});

test('gets employee email', () => {
    expectStr(employee.getEmail(), employee.email);
});

test('gets employee role', () => {
    expectToBe(employee.getRole(), 'Employee');
});
