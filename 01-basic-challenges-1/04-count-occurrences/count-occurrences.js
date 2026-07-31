// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === char) {
//       count++;
//     }
//   }
//   return count;
// }

function countOccurrences(str, char) {
  let count = 0;
  const splittedString = str.split("");
  for (let letter of splittedString) {
    if (letter === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
