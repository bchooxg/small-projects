// Function will add a space after every 4th digit
export
function formatter(input) {
    input = deformatter(input);
    let cnt = 0;
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (i === 16 ){
            return output;
        }
        if (cnt === 4) {
            output += ' ';
            cnt = 0;
        }
        output += input[i];
        cnt++;

    }
    return output;
}
export
function deformatter(input) {
    return input.replace(/\s/g, '');
}

