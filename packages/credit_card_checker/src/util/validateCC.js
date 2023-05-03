// Function to validate credit card number
// The function should return:
// - 'no-calc' if the input string is empty
// - 'invalid' if the input string contains non-digit characters
// - 'valid' if the Luhn checksum is correct
// - 'invalid' if the Luhn checksum is incorrect
// - 'invalid' if the Luhn checksum cannot be calculated
export

function validateCC(ccNumber) { // Returns True or False
  // split digits into array
  var ccNumberArray = ccNumber.split(''); // reverse array
  let newNum = 0;
  // console.log(`start arr ${ccNumberArray}`)
  // double every second digit
  for(let i = 0; i < ccNumberArray.length; i++) {
    if(i % 2 == 0) {
      newNum = ccNumberArray[i] * 2;
      if(newNum > 9) {
        newNum = newNum - 9;
      }
      ccNumberArray[i] = newNum;
    }
  }

  // sum all digits
  let sum = 0;
  for(let i = 0; i < ccNumberArray.length; i++) {
    sum += parseInt(ccNumberArray[i]);
  }
  // console.log(`final arr ${ccNumberArray}`)
  // console.log(sum % 10 == 0)

  // check if sum is divisible by 10
  return sum % 10 == 0;

}
