const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
  
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    
    res.write('This is the list of our students\n');

    
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`${data.join('\n')}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
