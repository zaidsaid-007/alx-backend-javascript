import fs from 'fs';
import promise from 'promise';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const lines = data.toString().split('\n');
        lines.forEach((line) => {
          const [field, firstName] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        });
        resolve(students);
      }
    });
  });
}