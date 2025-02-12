//Создаю массив со случайными оценками от 1 до 100 для 12 студентов:
const grades = [null, null, null, null, null, null, null, null, null, null, null, null];

const result = grades.map((grade) => {
  return Math.ceil(Math.random() * 100);
});

//Считаю средний балл студентов:
let total = 0;
result.forEach((grade) => {
  total = total + grade;
});

const averageGrade = total / result.length;
const roundAverageGrade = averageGrade.toFixed(1);

//Считаю максимальный и минимальный баллы:
const ascendingLine = result.sort((a, b) => {
  return a - b;
});

const smallestGrade = ascendingLine[0];

const descendingLine = ascendingLine.reverse();
const highestGrade = descendingLine[0];

//Считаю количество студентов с оценкой >= 60:
const goodGrades = result.filter((grade) => {
  return grade >= 60;
});
const goodStudents = goodGrades.length;

//Считаю количество студентов с оценкой < 60:
const badGrades = result.filter((grade) => {
  return grade < 60;
});
const badStudents = badGrades.length;

//Преобразовываю числовые оценки в формат буквенных:
const letterGrades = result.map((grade) => {
  if (grade >= 80) {
    return 'A';
  } else if (grade >= 60) {
    return 'B';
  } else if (grade >= 40) {
    return 'C';
  } else if (grade >= 20) {
    return 'D';
  } else {
    return 'E';
  }
});

//Вывожу на экран:
const grades1 = `Оценки двенадцати студентов: ${result}`;
const paragraph1 = document.createElement('p');
paragraph1.textContent = grades1;
document.body.appendChild(paragraph1);

const averageGrade1 = `Средний балл: ${roundAverageGrade}`;
const paragraph2 = document.createElement('p');
paragraph2.textContent = averageGrade1;
document.body.appendChild(paragraph2);








