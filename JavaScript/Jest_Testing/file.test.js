// function fetchData() {
//   return Promise.resolve('peanut butter');
// }

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });


// file.test.js

// ----------- Async function to test -----------
function fetchData(success = true) {
  if (success) {
    return Promise.resolve('peanut butter');
  } else {
    return Promise.reject('error');
  }
}

// ----------- Tests ----------------------------

test('the data is peanut butter', async () => {
  const data = await fetchData(true); // simulate success
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(false); // simulate error
  } catch (error) {
    expect(error).toMatch('error');
  }
});
