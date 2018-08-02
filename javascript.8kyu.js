/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
    let counts = {};
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    countsKeys = Object.keys(counts);
    for (let i = 0; i < countsKeys.length; i++) {
        if (counts[countsKeys[i]] % 2 !== 0) {
            return Number(countsKeys[i]);
        } 
    }
}

