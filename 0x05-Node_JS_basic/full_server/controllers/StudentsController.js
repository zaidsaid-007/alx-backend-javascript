import { readDatabase } from '../utils';

export class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(req.query.filePath)
      .then((students) => {
        const fields = Object.keys(students).sort((a, b) => a.localeCompare(b));
        const response = ['This is the list of our students'];
        fields.forEach((field) => {
          response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });
        res.status(200).send(response.join('\n'));
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(req.query.filePath)
        .then((students) => {
          const response = `List: ${students[major].join(', ')}`;
          res.status(200).send(response);
        })
        .catch((err) => {
          res.status(500).send('Cannot load the database');
        });
    }
  }
}