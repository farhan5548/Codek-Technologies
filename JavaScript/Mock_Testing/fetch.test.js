const getUser = require('./fetch');
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'Farhan' }),
  })
);
test('mocks fetch and returns user', async () => {
  const user = await getUser();
  expect(user).toEqual({ name: 'Farhan' });
});
