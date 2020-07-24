const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    resolve();
  }, 3000);
});
promise.then((result) => {
  console.log(result);
});

const getData = async function fetchData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await resp.json();
  console.log(data);
};

setTimeout(() => {
  getData();
}, 5000);

// I prefer the async wait
