/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 30.12.2021
	source: https://www.hackerrank.com/challenges/js10-arrows/problem
	Day 5: Arrow Functions
*/

function modifyArray(nums) {
    let result = [];
     nums.forEach(num => {
        num % 2 == 0? result.push(num * 2) : result.push(num * 3);
    });
    return result;
}
