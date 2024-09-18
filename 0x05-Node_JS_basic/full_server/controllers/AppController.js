/**
 * Contains the miscellaneous route handlers.
 * @author Zaid Mohammed <https://github.com/zaidsaid-007>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;