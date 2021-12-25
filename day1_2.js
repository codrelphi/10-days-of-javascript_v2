/* 
	date: 25.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-function/problem
	Day 1: Functions

*/

/*
 * 4! = 4 * 3 * 2 * 1 = 24
 */

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    
    return n * factorial(n-1);
}
