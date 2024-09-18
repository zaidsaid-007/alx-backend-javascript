// const express = require('express');
// const countStudents = require('./3-read_file_async');

// const app = express();
// app.get('/', (req, res) => res.send('Hello Holberton School!'));
// app.get('/students', async (req, res) => {
//   const title = 'This is the list of our students\n';
//   try {
//     const data = await countStudents(process.argv[2]);
//     res.send(`${title}${data.join('\n')}`);
//   } catch (error) {
//     res.send(`${title}${error.message}`);
//   }
// });
// app.listen(1245);
// module.exports = app;
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Route for the root path
app.get('/', (req, res) => res.send('Hello Holberton School!'));

// Route for the /students path
app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]); // Read student data asynchronously
    res.send(`${title}${data.join('\n')}`); // Send the title and student list as the response
  } catch (error) {
    res.send(`${title}${error.message}`); // Send the title and error message in case of failure
  }
});

// Start the server, listening on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
