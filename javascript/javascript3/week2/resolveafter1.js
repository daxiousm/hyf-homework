function solve(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("string"), resolveAfter * 1000);
  });
}
solve(15).then(() => {
  console.log("I am called asynchronously"); // logged out after  seconds
});

//async/await

/* async function resolveLater() {
  try {
    const resp = await solve(5);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}
resolveLater(); */
