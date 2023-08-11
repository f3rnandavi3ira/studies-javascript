'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let positivo = 0;
    let negativo = 0;
    let zero = 0;
    let totalNumerosArray = arr.length;
    
    arr.forEach(function(n){
        if (n < 0){
            negativo++;
        }else if (n > 0){
            positivo++;
        }else{
            zero++;
        }
    })
    
    let razaoPos = (positivo / totalNumerosArray).toFixed(6);
    let razaoNeg = (negativo / totalNumerosArray).toFixed(6);
    let razaoZero = (zero / totalNumerosArray).toFixed(6);

    console.log(razaoPos);
    console.log(razaoNeg);
    console.log(razaoZero);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}