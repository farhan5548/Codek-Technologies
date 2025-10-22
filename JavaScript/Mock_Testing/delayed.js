function delayed(callback) {
  setTimeout(() => {
    callback('done');
  }, 1000);
}
module.exports = delayed;
