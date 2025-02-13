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

const smallestGrade1 = `Минимальный балл: ${smallestGrade}`;
const paragraph3 = document.createElement('p');
paragraph3.textContent = smallestGrade1;
document.body.appendChild(paragraph3);

const highestGrade1 = `Максимальный балл: ${highestGrade}`;
const paragraph4 = document.createElement('p');
paragraph4.textContent = highestGrade1;
document.body.appendChild(paragraph4);

const goodStudents1 = `Количество студентов с положительной оценкой: ${goodStudents}`;
const paragraph5 = document.createElement('p');
paragraph5.textContent = goodStudents1;
document.body.appendChild(paragraph5);

const badStudents1 = `Количество студентов с отрицательной оценкой: ${badStudents}`;
const paragraph6 = document.createElement('p');
paragraph6.textContent = badStudents1;
document.body.appendChild(paragraph6);

const letterGrades1 = `Оценки в буквенном формате: ${letterGrades}`;
const paragraph7 = document.createElement('p');
paragraph7.textContent = letterGrades1;
document.body.appendChild(paragraph7);







