const fetchData = require('./asyncFunction');

test('returns peanut butter (async/await)', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
