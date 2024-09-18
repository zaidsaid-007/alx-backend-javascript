const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Handle root path "/"
    res.write('Hello Holberton School!');
    res.end(); // Ensure response ends properly here
  } else if (req.url === '/students') {
    // Handle "/students" path
    res.write('This is the list of our students\n');
    
    // Process the students list asynchronously
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`); // Append the student list to the response and end it
    } catch (error) {
      res.end(error.message); // If there's an error, display the error message
    }
  } else {
    // If a different URL is accessed, return a 404 status code
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

