/**
 *
 * GPA Calculator
 */

 function Result() {
    this.gpaCal = (marks) => {
      let gpa;
  
      if (marks > 0 && marks < 33) {
        gpa = 0;
      } else if (marks >= 33 && marks < 40) {
        gpa = 1;
      } else if (marks >= 40 && marks < 50) {
        gpa = 2;
      } else if (marks >= 50 && marks < 60) {
        gpa = 3;
      } else if (marks >= 60 && marks < 70) {
        gpa = 4;
      } else if (marks >= 70 && marks < 80) {
        gpa = 4.5;
      } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
      }
      return gpa;
    };
  
    /**
     *
     * GRADE Calculator
     */
    this.gradeCal = (marks) => {
      let grade;
  
      if (marks > 0 && marks < 33) {
        grade = "F";
      } else if (marks >= 33 && marks < 40) {
        grade = "D";
      } else if (marks >= 40 && marks < 50) {
        grade = "C";
      } else if (marks >= 50 && marks < 60) {
        grade = "B";
      } else if (marks >= 60 && marks < 70) {
        grade = "A-";
      } else if (marks >= 70 && marks < 80) {
        grade = "A";
      } else if (marks >= 80 && marks <= 100) {
        grade = "A+";
      }
      return grade;
    };
  
    /**
     *
     * CGPA Calculator
     */
  
    this.cgpaCal = (bn, en, math, s, ss, rel) => {
      let total_grade = bn + en + math + s + ss + rel;
      let cgpa = total_grade / 6;
  
      if (
        bn == 0 ||
        en == 0 ||
        math == 0 ||
        s == 0 ||
        ss == 0 ||
        rel == 0
      ) {
        return `You are Failed`;
      } else {
      }
  
      return `${cgpa.toFixed(2)} & Total Grade = ${this.totalGrade(cgpa)}`;
    };

  
    /**
     *
     * Total Grade Calculator
     */
  
    this.totalGrade = (cgpa) => {
      if (cgpa >= 0 && cgpa < 1) {
        return "F";
      } else if (cgpa >= 1 && cgpa < 2) {
        return "D";
      } else if (cgpa >= 2 && cgpa < 3) {
        return "C";
      } else if (cgpa >= 3 && cgpa < 3.5) {
        return "B";
      } else if (cgpa >= 3.5 && cgpa < 4) {
        return "A-";
      } else if (cgpa >= 4 && cgpa < 5) {
        return "A";
      } else if (cgpa == 5) {
        return "A+";
      }
    };
  }
  