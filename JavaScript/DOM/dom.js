export function createDOM() {
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.id = 'myBtn';

  const output = document.createElement('p');
  output.id = 'result';
  output.textContent = 'Before click';

  document.body.appendChild(button);
  document.body.appendChild(output);

  button.addEventListener('click', () => {
    output.textContent = 'After click';
  });
}
