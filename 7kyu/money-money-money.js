//https://www.codewars.com/kata/563f037412e5ada593000114/javascript

function calculateYears(principal, interest, tax, desired) {

   let year= 0

    while (principal<desired) {
        let currentYearEarning = principal * interest;
        let currentTax = currentYearEarning * tax;
        principal = principal + currentYearEarning - currentTax;
        year++
    }
    return year
}

console.log(calculateYears(1000,0.01625,0.18,1200))
