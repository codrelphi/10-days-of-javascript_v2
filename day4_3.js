/*
	date: 28.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-class/problem
	Day 4: Classes
*/

class Polygon {
    
    constructor(arrays) {
        this.arrays = arrays;
    }
    
    perimeter() {
        let sum = 0;
        this.arrays.forEach(a => {
            sum += a;
        });
        return sum;
    }
}