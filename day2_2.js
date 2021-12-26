/*
	date: 26.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-switch/problem
	Day 2: Conditional Statements: Switch
*/


function getLetter(s) {
    let letter;
    
    switch(s.charAt(0)) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            letter = 'A';
            break;
        case 'b': case 'c': case 'd': case 'f': case 'g':
            letter = 'B';
            break;
        case 'h': case 'j': case 'k': case 'l': case 'm':
            letter = 'C';
            break;
        default: 
            letter = 'D';
        
    }
    
    return letter;
}
