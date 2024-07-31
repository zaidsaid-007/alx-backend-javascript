# 0x04. TypeScript

## Overview

This project delves into the basics of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. TypeScript offers static type checking, which can help catch errors during development and provide a more robust codebase. The project covers the fundamental aspects of TypeScript, including types, interfaces, classes, and functions. By the end of this project, you will have a solid understanding of how to leverage TypeScript's features to write cleaner and more maintainable code.

## Learning Objectives

Upon completing this project, you should be able to:

1. **Understand Basic Types in TypeScript:**
   - Explain and use TypeScript's primitive types such as `string`, `number`, and `boolean`.
   - Utilize type annotations to enforce data types for variables and function parameters.

2. **Work with Interfaces and Classes:**
   - Define and implement interfaces to create complex types and enforce contracts in your code.
   - Use classes to encapsulate related data and behavior, and understand class inheritance and polymorphism in TypeScript.

3. **Manipulate the DOM with TypeScript:**
   - Apply TypeScript to manipulate HTML elements and respond to user events.

4. **Utilize Generic Types:**
   - Create and use generic functions and classes to write reusable and type-safe code.

5. **Understand and Use Namespaces:**
   - Organize code into namespaces to avoid global namespace pollution and manage code dependencies effectively.

6. **Work with Declaration Merging:**
   - Learn how to use TypeScript's declaration merging feature to extend interfaces or merge separate declarations.

7. **Employ Ambient Namespaces for External Libraries:**
   - Understand how to use ambient namespaces to import and work with external libraries in TypeScript.

8. **Understand Basic Nominal Typing:**
   - Differentiate between structural and nominal typing and apply basic nominal typing concepts in TypeScript.

## Project Structure

The project is organized into several directories and files, each focusing on different aspects of TypeScript:

- **src/**: Contains the source code including examples and implementations for each concept covered.
- **tests/**: Includes test cases to validate your understanding and implementations of TypeScript features.
- **README.md**: This document, providing an overview and essential information about the project.

## Getting Started

To begin exploring the concepts covered in this project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd 0x04-TypeScript
   ```

2. **Navigate to the `src` Directory:**
   Review the source code files in the `src/` directory for examples and implementations of the topics discussed.

3. **Run Examples and Tests:**
   Execute the provided test cases and examples to see TypeScript features in action.

## Configuration Files

The project includes several configuration files to set up the development environment:

- **`package.json`:** Defines the project dependencies and scripts.
- **`.eslintrc.js`:** Configures ESLint rules for maintaining code quality.
- **`tsconfig.json`:** Specifies the compiler options for TypeScript.
- **`webpack.config.js`:** Configures Webpack for module bundling and building the project.

## Tasks

1. **Creating an Interface for a Student**
   - Define a `Student` interface and create an array of students.
   - Render the student data in a table using vanilla JavaScript.

2. **Building a Teacher Interface**
   - Define a `Teacher` interface with various properties and implement it.

3. **Extending the Teacher Interface**
   - Create a `Directors` interface extending `Teacher`, adding additional properties.

4. **Printing Teachers**
   - Implement a function to format and print teacher names.

5. **Writing a Student Class**
   - Create a `StudentClass` with methods and use interfaces to define its structure.

6. **Advanced Types Part 1**
   - Define interfaces for `Director` and `Teacher`, and implement classes for them.

7. **Creating Functions Specific to Employees**
   - Write functions to differentiate between `Director` and `Teacher` and call appropriate methods.

8. **String Literal Types**
   - Define string literal types and use them in functions.

9. **Ambient Namespaces**
   - Use ambient namespaces to declare and use external libraries.

10. **Namespace & Declaration Merging**
    - Use namespaces and declaration merging to extend interfaces and classes.

11. **Brand Convention & Nominal Typing**
    - Apply nominal typing concepts to enforce stricter type checks.

## Conclusion

This project provides a comprehensive introduction to TypeScript, equipping you with the knowledge and skills to write more structured and maintainable JavaScript code. By mastering these concepts, you can effectively utilize TypeScript in your projects, enhancing both development experience and code quality.

## Resources

- [TypeScript in 5 minutes](https://alx-intranet.hbtn.io/rltoken/waTSa9Mguj912pel9On57w)
- [TypeScript documentation](https://alx-intranet.hbtn.io/rltoken/iPO8DlHCGzc1jnojLoP9HA)

