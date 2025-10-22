import { createDOM } from './dom';

describe('DOM Manipulation Test', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.body.innerHTML = '';
    createDOM();
  });

  test('should update text after button click', () => {
    const button = document.getElementById('myBtn');
    const output = document.getElementById('result');

    expect(output.textContent).toBe('Before click');

    button.click(); // Simulate click

    expect(output.textContent).toBe('After click');
  });
});
