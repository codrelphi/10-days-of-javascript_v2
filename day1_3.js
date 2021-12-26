/* 
	date: 26.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-let-and-const/problem
	Day 1: Let and Const

*/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    const PI = Math.PI;
    let area = PI * Math.pow(r, 2);
    let perimeter = 2 * PI * r;
    
    // Print the area of the circle:
    console.log(area);
    
    // Print the perimeter of the circle:
    console.log(perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}