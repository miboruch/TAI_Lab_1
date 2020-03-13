const array = [...Array(10).keys()].map(x => ++x);

// 1st solution
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(j * i);
  }
}

// 2nd solution
for (let i in array) {
  for (let j in array) {
    console.log(i * j);
  }
}

//3rd solution
const result = array.map(x => array.map(y => x * y));
console.log(result);
