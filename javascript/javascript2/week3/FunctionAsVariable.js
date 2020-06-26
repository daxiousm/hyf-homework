const fun1 = (a, b) => a * b;
const fun2 = (a, b) => a - b;
function fun3(a, b) {
  return a + b;
}

const arrFunction = [fun1(), fun2(), fun3()];
for (let i = 0; i < arr.length; i++) {
  console.log(arrFunction[i]());
}
console.log(fun1(5, 4));
console.log(fun2(5, 4));
console.log(fun3(5, 4));

//
const obj = {
  fun4: () => {
    console.log(this);
  },
};
obj.fun4();
