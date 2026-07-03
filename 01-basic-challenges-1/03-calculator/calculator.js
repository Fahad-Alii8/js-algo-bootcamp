/**
 *
 * @param{number} num1 - The first number.
 * @param{number} num2 - The second number.
 * @param{string} operator - The operator to use in the calculation.
 * @returns{number} The result of the calculation.
 *
 */

// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else {
//     throw new Error("Invalid Operator");
//   }
// }

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      throw new Error("Invalid Operator");
  }
}

module.exports = calculator;
