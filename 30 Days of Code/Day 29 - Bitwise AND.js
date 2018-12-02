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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n_temp = readLine().split(' ');
        let n = parseInt(n_temp[0]);
        let k = parseInt(n_temp[1]);

        let a = k - 1;
        let b = (~a) & -(~a);

        if ((a | b) > n)
            console.log(a - 1);
        else
            console.log(a);
    }
}