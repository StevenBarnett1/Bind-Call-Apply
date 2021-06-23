// Do not modify!
const GradeBook = require('./class/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;


// Modify this
let grades1Average = gradesAvg(grades);
let grades1WithBonus = gradesAvg(grades, [20]);

console.log('Grade list');
console.log(grades1Average);     // 58
console.log(grades1WithBonus);   // 78
