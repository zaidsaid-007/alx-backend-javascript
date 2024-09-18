const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split data into lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Parse CSV data
    const students = lines.slice(1); // Skip the header
    const fields = {}; // To store students by field of study

    students.forEach((student) => {
      const studentData = student.split(',');
      if (studentData.length === 4) {
        const firstName = studentData[0];
        const field = studentData[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Log the number of students and their names in each field
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const fieldStudents = fields[field];
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
