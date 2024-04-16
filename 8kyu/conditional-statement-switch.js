function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            return days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return days = 30;
    }
    return days = 31
}

console.log(howManydays(1))
