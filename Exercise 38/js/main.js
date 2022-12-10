// Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

const handleGrade = () => {
  const totalGrade = Number(document.getElementById("totalGrade").value);
  let finalExam = document.getElementById("finalExam").value;
  finalExam = finalExam.trim();

  if (
    finalExam === "Y" ||
    finalExam === "y" ||
    finalExam === "N" ||
    finalExam === "n"
  ) {
    if (finalExam === "Y" || finalExam === "y") {
      finalExam = true;
    } else {
      finalExam = false;
    }

    if (finalExam && totalGrade >= 90) {
      document.getElementById("result").innerHTML = true;
    } else if (finalExam && totalGrade < 90) {
      document.getElementById("result").innerHTML = false;
    } else if (!finalExam && totalGrade >= 89) {
      document.getElementById("result").innerHTML = true;
    } else {
      document.getElementById("result").innerHTML = false;
    }
  } else {
    document.getElementById("result").innerHTML =
      "Enter a valid input for the final exam field.";
  }
};
