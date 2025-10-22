const text = require('./upper');
test('The string is converted to UpperCase successfully.',()=>{
    const output = "THIS SMALL LETTER STRING IS CONVERTED TO CAPITAL LETTERS USING JAVASCRIPT.";
    expect(text()).toBe(output);
})