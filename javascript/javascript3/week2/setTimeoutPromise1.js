function setTimeoutPromise(setTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("string"), setTime);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("called after 3 seconds");
});

function getPosition(options) {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
getPosition()
  .then((position) => {
    console.log(position);
  })
  .catch((err) => {
    console.error(err.message);
  });
