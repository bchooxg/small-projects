export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

export function extractNumbers(formData) {
  const numbers = [];

  for (const [key, value] of formData) {
    if (key.startsWith('num')) {
      numbers.push(value);
    }
  }
  return numbers;
}