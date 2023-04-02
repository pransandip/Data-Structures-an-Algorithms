//* version: 1
function charCount(str) {
  // make object to return at the end
  const result = {};

  // loop over string, for each char
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      if (str[i] !== " ") result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("My name is sandy"));

//* version: 2
function charCount2(str) {
  // make object to return at the end
  const result = {};
  // loop over string, for each char
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
console.log(charCount2("My name is sandy 1233"));

//* version: 3
function charCount23(str) {
  // make object to return at the end
  const result = {};
  // loop over string, for each char
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCount23("My name is sandy"));

/* ---- Example solution ----- */
let a = 1;
//* post-increment
// console.log(a++);

//* pre-increment like a = a + 1
console.log(++a);
console.log(a);

// Returns the Unicode value of the character at the specified location.
console.log("love".charCodeAt(1));
