const prompt = require('prompt-sync')({ sigint: true });

const input = (question) => {
    return prompt(question);
}
const output = (output) => {
    return console.log(output);
}

module.exports = {
    input, output
}