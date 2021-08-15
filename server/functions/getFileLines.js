const fs = require('fs');
const readline = require('readline');

const validateFile = require('./validateFile');

const getFileLines = (filePath) => {

    validateFile(filePath);

    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
    });

    const lines = [];

    return new Promise((resolve, reject) => {
        readInterface.on('line', (line) => {
            lines.push(line.replace(/\r\n/g, ''));
        });

        readInterface.on('close', () => {
            if (lines.length > 0 && lines[0].length !== 0) {
                resolve(lines);
            } else {
                reject();
            }
        })
    }).catch(() => {
        throw new Error(`File empty: ${filePath}`);
    });
}

module.exports = getFileLines;