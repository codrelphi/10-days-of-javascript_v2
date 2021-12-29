/*
	date: 29.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-inheritance/problem
	Day 5: Template Literals
*/

function sides(literals, ...expressions) {
    let A, P;
    [A, P] = [expressions[0], expressions[1]];
    let s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    let s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    return [s1, s2].sort();
}