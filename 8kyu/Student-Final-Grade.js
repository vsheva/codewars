function finalGrade (exam, projects) {
    if(exam>90 || projects>10) return 100;
    if(exam>75 && projects>=5) return 90;
    if(exam>50 && projects>=2) return 75;
    return 0
}

console.log(finalGrade(100, 12))


//const finalGrade = (grade, projects) => grade > 90 || projects > 10 ? 100 : grade > 75 && projects > 4 ? 90 : grade > 50 && projects > 1 ? 75 : 0;
