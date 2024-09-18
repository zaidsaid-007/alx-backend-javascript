const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const messages = [];
      const content = data.split('\n').filter(line => line.trim() !== '');  // Filter out empty lines
      const students = content.slice(1).map(line => line.split(','));  // Skip the header row

      const nStudents = students.length;
      const message = `Number of students: ${nStudents}`;
      console.log(message);
      messages.push(message);

      const subjects = {};

      students.forEach(student => {
        const field = student[3];  // Assuming the field is the 4th column (index 3)
        const firstName = student[0];

        if (!subjects[field]) {
          subjects[field] = [];
        }
        subjects[field].push(firstName);
      });

      for (const field in subjects) {
        const list = subjects[field];
        const fieldMessage = `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        console.log(fieldMessage);
        messages.push(fieldMessage);
      }

      resolve(messages);
    });
  });
}

module.exports = countStudents;
