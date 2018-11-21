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
    let n = parseInt(readLine(), 10);
    let arr = [];

    while (n != 0) {
        if (n % 2 == 0)
            arr.push(0);
        if (n % 2 == 1)
            arr.push(1);
        n = Math.floor(n / 2);
    }

    let max = 0;
    let cur = 0;


    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == 1)
            cur++;
        else if (arr[i] == 0) {
            if (cur > max)
                max = cur;
            cur = 0;
        }
    }

    if (cur > max)
        max = cur;

    console.log(max);
}
