const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };
  if (newSubmission.score >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
}

function deleteSubmissionsByIndex(array, index) {
  array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
  const i = array.findIndex((array) => array.name == name);
  array.splice(i, 1);
}

function editSubmission(array, index, score) {
  array[index].score = score;
  const updatedStudent = array[index];
  {
    if (updatedStudent.score >= 60) {
      updatedStudent.passed = true;
    } else {
      updatedStudent.passed = false;
    }
  }
  array[index].passed = updatedStudent.passed;
}

function findSubmissionByName(array, name) {
  const i = array.find((array) => array.name == name);
  return i;
}

function findLowestScore(array) {
  let min_value = null;

  array.forEach(function (submission) {
    if (min_value === null || min_value.score > submission.score) {
      min_value = submission;
    }
  });
  return min_value;
}

function findAverageScore(array) {  
    let sum = 0;
    for (const student of array) {
        sum += student.score;
    }
    let avg = sum / array.length;
    return avg;
}

function filterPassing(array) {
    let passingStudents = array.filter(function(student) {
        return student.score >= 60;
      });
}

function filter90AndAbove(array) {
    let topStudents = array.filter(function(student) {
        return student.score >= 90;
      });
}

addSubmission(submissions, "James", 92, "2020-05-21");
deleteSubmissionsByIndex(submissions, 0);
deleteSubmissionByName(submissions, "Jill");
editSubmission(submissions, 1, 74);
findSubmissionByName(submissions, "Jack");
findLowestScore(submissions);
findAverageScore(submissions);
filterPassing(submissions);
filter90AndAbove(submissions);