const subtract = require('./subtract');
test('subtract 25 - 5 to equals 20', ()=>{
    expect(subtract(25,5)).toBe(20);
});