// * O(n) linear runtime
const logAtLeast5 = (n) => {
  for (i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};
logAtLeast5(6);

// * O(1) constant runtime
const logAtMost5 = (n) => {
  for (i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};
logAtMost5(2);
