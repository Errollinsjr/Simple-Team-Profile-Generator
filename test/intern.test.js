const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Moe', 1, 'Moe@gmail.com');

test('creates a intern object', () => {
    expectToBe(intern.name,'Moe');
    expectNum(intern.id);
    expectStr(intern.email, '@');
});

test('gets intern name', () => {
    expectStr(intern.getName(), `${intern.name}`);
});

test('gets intern ID', () => {
    expectToBe(intern.getId(), intern.id);
});

test('gets intern email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern role', () => {
    expectToBe(intern.getRole(), 'Intern');
});

test('gets intern github', () => {
    expectToBe(intern.getSchool(), intern.school);
});
