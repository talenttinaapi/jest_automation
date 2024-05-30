const sum = require('./sum');
test('adds one + two to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});