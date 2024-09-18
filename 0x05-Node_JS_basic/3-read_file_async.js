const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      // Split the file content into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        reject(Error('Cannot load the database'));
        return;
      }

      const headers = lines[0].split(','); // Extract headers (skip the header line later)
      const students = lines.slice(1); // Extract student data from the remaining lines

      const subjects = {}; // To store students by field of study

      students.forEach((student) => {
        const studentInfo = student.split(',');
        if (studentInfo.length === headers.length) {
          const firstName = studentInfo[0]; // First column is the student's first name
          const field = studentInfo[3]; // Assuming the 4th column is the field (index 3)

          if (!subjects[field]) {
            subjects[field] = [];
          }
          subjects[field].push(firstName); // Group students by field
        }
      });

      // Log the total number of students
      const totalStudents = students.filter((student) => student.split(',').length === headers.length).length;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students and list of names per field
      for (const field in subjects) {
        const fieldCount = subjects[field].length;
        const namesList = subjects[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldCount}. List: ${namesList}`);
      }

      resolve(); // Resolve the promise once all logging is done
    });
  });
}

module.exports = countStudents;
