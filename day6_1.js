/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 30.12.2021
	source: https://www.hackerrank.com/challenges/js10-bitwise/problem
	Day 6: Bitwise Operators
*/

function getMaxLessThanK(n, k) {
   let r = [];
    for (let i=1; i<=n; i++) {
        for (let j=i+1; j<=n; j++) {
            if ((i & j) < k) {
                r.push(i & j);
            }
        }
    }
    //return Math.max(...r);
    let max = r[0];
    for (let el of r) {
        if (el > max) max = el;
    }
    return max;
}