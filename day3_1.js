/*
	date: 27.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-arrays/problem
	Day 2: Arrays
*/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let max = Math.max(...nums);
    let newNums = nums.filter(e => e!=max);
    return Math.max(...newNums);
}
