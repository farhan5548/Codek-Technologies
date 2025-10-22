const delayed = require('./delayed');

jest.useFakeTimers(); // Enable fake timers

test('calls callback after 1 second', () => {
  const mockCallback = jest.fn();

  delayed(mockCallback);

  // Fast-forward time
  jest.runAllTimers();

  expect(mockCallback).toHaveBeenCalledWith('done');
});
