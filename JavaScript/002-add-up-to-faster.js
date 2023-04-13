// O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(10_000));
let t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000} Seconds`);
