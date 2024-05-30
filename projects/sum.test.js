const sum = require('./sum');
test('adds one + two to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
//add a test to check if sum of 2 and 3 is 5