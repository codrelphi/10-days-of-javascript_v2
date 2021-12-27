/*
	date: 26.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-try-catch-and-finally
	Day 3: Try, Catch, and Finally
*/

function reverseString(s) {
    try {
        s = s.split('').reverse();
        s = s.join('');
    }
    catch(TypeError) {
        console.log("s.split is not a function");
    }
    finally {
        console.log(s); 
    }
}