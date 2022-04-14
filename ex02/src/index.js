const worksDay = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days) {
    let week =[...days,'SAT','SUN'] ;
    return week;
}
console.log(myWeek(worksDay));
module.exports = myWeek;