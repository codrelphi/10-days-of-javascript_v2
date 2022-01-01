/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 01.01.2022
	source: https://www.hackerrank.com/challenges/js10-regexp-2/problem
	Day 7: Regular Expressions II
*/

function regexVar() {
 
    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}