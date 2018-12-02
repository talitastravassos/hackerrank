'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let N = parseInt(readLine());
    let patt = new RegExp("@gmail.com");
    let names = []; //Creating the array of first names

    for (let i = 0; i < N; i++) {
        let firstName_temp = readLine().split(' ');
        let firstName = firstName_temp[0];
        let emailID = firstName_temp[1];

        if (patt.test(emailID)) {
            names.push(firstName);
        }

    }

    //Sorting names in alphabetical order, then printing them to console.
    names.sort().forEach(function (name) {
        console.log(name);
    });

}
