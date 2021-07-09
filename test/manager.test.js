const Manager = require('../lib/Manager');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const manager = new Manager('Yo', 1, 'Yo@gmail.com');

test('creates a manager object', () => {
    expectToBe(manager.name,'Yo');
    expectNum(manager.id);
    expectStr(manager.email, '@');
});

test('gets manager name', () => {
    expectStr(manager.getName(), `${manager.name}`);
});

test('gets manager ID', () => {
    expectToBe(manager.getId(), manager.id);
});

test('gets manager email', () => {
    expectStr(manager.getEmail(), manager.email);
});

test('gets manager role', () => {
    expectToBe(manager.getRole(), 'Manager');
});

test('gets manager github', () => {
    expectToBe(manager.getOfficeNumber(), manager.officeNumber);
});
