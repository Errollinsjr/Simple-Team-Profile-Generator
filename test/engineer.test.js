const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('Joe', 1, 'Joe@gmail.com');

test('creates a engineer object', () => {
    expectToBe(engineer.name,'Joe');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
});

test('gets engineer name', () => {
    expectStr(engineer.getName(), `${engineer.name}`);
});

test('gets engineer ID', () => {
    expectToBe(engineer.getId(), engineer.id);
});

test('gets engineer email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets engineer role', () => {
    expectToBe(engineer.getRole(), 'Engineer');
});

test('gets engineer github', () => {
    expectToBe(engineer.getGitHub(), engineer.github);
});
