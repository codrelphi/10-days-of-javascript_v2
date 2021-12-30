/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 30.12.2021
	source: https://www.hackerrank.com/challenges/js10-arrows/problem
	Day 5: Arrow Functions
*/

function modifyArray(nums) {
    let result = [];
    var ops = n =>  {
        if (n%2 == 0) return n*2;
        else return n*3;
    }
    for (let n of nums) {
        result.push(ops(n));
    }
    return result;
}
