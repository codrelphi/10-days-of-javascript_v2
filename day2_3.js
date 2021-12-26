/*
	date: 26.12.2021
	auteur: Chancerel Codjovi (aka codrelphi)
	source: https://www.hackerrank.com/challenges/js10-loops/problem
	Day 2: Loops
*/

function vowelsAndConsonants(s) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i=0; i<s.length; i++) {
        let c = s.charAt(i);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
        {
        	console.log(c); 
        }  
        
    }
    
    for (let i=0; i<s.length; i++) {
        let c = s.charAt(i);
        if (c != 'a' && c != 'e' && c != 'i' && c !== 'o' && c !== 'u') console.log(c);    
        
    }
    
}