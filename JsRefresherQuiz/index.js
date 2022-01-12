const students = [
  {
    name: "John",
    score1: 47,
    score2: 46,
  },
  {
    name: "Bob",
    score1: 23,
    score2: 24,
  },
  {
    name: "Nick",
    score1: 40,
    score2: 35,
  },
  {
    name: "Alex",
    score1: 44,
    score2: 45,
  },
];

const scores = [91, 81, 71, 61, 51];
const degrees = ["A", "B", "C", "D", "E"];

const scoreToDegree = (totalScore) => {
  if (totalScore <= 50) {
    console.log("Repeat a year...");
    return;
  }

  for (let i = 0; i < scores.length; i++) {
    if (totalScore >= scores[i]) {
      console.log(degrees[i]);
      break;
    }
  }
};

const calculateTotalScore = () => {
  students.forEach((student) => {
    scoreToDegree(student.score1 + student.score2);
  });
};

calculateTotalScore();
