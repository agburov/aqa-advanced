const averageGrade = 91;

if (averageGrade < 60) {
  console.log('Unsatisfactory');
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log('Satisfactory');
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log('Good');
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log('Very Good');
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log('Excellent');
} else {
  console.log('Invalid grade value');
}
