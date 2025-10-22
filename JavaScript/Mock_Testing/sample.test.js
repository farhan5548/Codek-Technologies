// test('description of the test', () => {
//   expect(actualValue).toBe(expectedValue);
// });

function add(a, b) {
  return a + b;
}

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

// | Matcher             | Purpose                         |
// | ------------------- | ------------------------------- |
// | `toBe(value)`       | Exact match (like `===`)        |
// | `toEqual(obj)`      | Deep equal (for objects/arrays) |
// | `toContain(value)`  | For arrays/strings              |
// | `toBeTruthy()`      | Value is truthy                 |
// | `toBeFalsy()`       | Value is falsy                  |
// | `toThrow()`         | Checks for errors being thrown  |
// | `resolves.toBe()`   | For resolved Promises           |
// | `rejects.toThrow()` | For rejected Promises           |

// const myMock = jest.fn();        // create a mock function

// myMock();                        // call it
// myMock('hello');                 // call with argument

// expect(myMock).toHaveBeenCalled();           // ✅ called
// expect(myMock).toHaveBeenCalledWith('hello'); // ✅ called with arg

const greet = jest.fn();
greet.mockReturnValue('Hi');

test('greet returns Hi', () => {
  expect(greet()).toBe('Hi');
});

