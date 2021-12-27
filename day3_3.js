/*
	date: 27.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-throw/problem
	Day 3: Throw
*/

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    
    if (a > 0) return "YES";
    else if (a == 0) throw Error("Zero Error");
    else throw Error("Negative Error");
   
}