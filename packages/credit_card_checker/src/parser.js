export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

export function extractNumbers(formData) {
  // should return a single number from the form data
  console.log(formData)
  for (const [key, value] of formData) {
    if (key.startsWith('number')) {
      return value;
    }
  }
}