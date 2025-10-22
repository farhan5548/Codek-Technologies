function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // some code (try to change x to 5)

  if (x == 1) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

const myPromises = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You ❤️");
  }, 3000);
});

myPromises.then(function (value) {
  console.log(value);
});
