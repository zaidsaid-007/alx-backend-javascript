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
const countStudents = require('./3-read_file_async'); // Import the function to handle reading the CSV file

const app = express(); // Create the Express app

// Route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Respond with a simple plain text message
});

// Route for the /students path
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n'); // Write the first line to the response
  try {
    const data = await countStudents(process.argv[2]); // Load and process the CSV file asynchronously
    res.end(`${data.join('\n')}`); // Send the processed student data as the response
  } catch (error) {
    res.end(error.message); // If there is an error (e.g., file not found), send the error message
  }
});

// Start the server, listening on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app; // Export the Express app for further use
