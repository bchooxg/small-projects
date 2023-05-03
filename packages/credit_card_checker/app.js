import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { validateCC } from './src/util/validateCC.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  let result = '';
  let resultFlag = false;

  try {
    validateCC(numberInputs[0]) ? resultFlag = true : resultFlag = false;
  } catch (error) {
    result = error.message;
  }

  let resultText = '';

  if (resultFlag) {
    resultText = `The credit card is valid`;
  } else {
    resultText = `The credit card is invalid`;
  }

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);