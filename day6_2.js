/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 30.12.2021
	source: https://www.hackerrank.com/challenges/js10-date/problem
	Day 6: JavaScript Dates
*/

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    let theDay = new Date(dateString);
    const dayNumber = theDay.getDay();
    switch(dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2: 
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            throw Error("This day does not exist !");
    }
    
    return dayName;
}