# Kata fizzbuzz
This repository solves FizzBuzz kata as described in [Coding Dojo](https://codingdojo.org/kata/FizzBuzz/) or [Kata-log.rocks](https://kata-log.rocks/fizz-buzz-kata).

The starter level kata is about TDD and baby steps.

## Kata Abstract
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz “.

Sample output
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc up to 100
```


### Stage 2 - new requirements

 * A number is fizz if it is divisible by 3 or if it has a 3 in it
 * A number is buzz if it is divisible by 5 or if it has a 5 in it


## About this repository

### 🧑‍🔬 Basic tools included and preconfigured to be used
- [Typescript 4](https://www.typescriptlang.org/)
- [Jest 27](https://jestjs.io/docs/getting-started) testing
- Type definitions for Node.js and Jest
- Preconfigured [scripts](#scripts-configured) for common operations
- Documentation generator [Typedoc](http://typedoc.org/)
- Linting with [ESLint 7](https://eslint.org/)
- [.editorconfig](https://editorconfig.org/) settings for consistent file format
- CHANGELOG generator [auto-changelog](https://github.com/cookpete/auto-changelog)
- 🔖 Available under the MIT license.


### Fast start
This project is designed to be used with the latest LTS version of Node.js.

Clone the repository:
```bash
git clone https://github.com/franciscomesa/typescript-boilerplate.git your_local_project_name

cd your_local_project_name
```

After clone, just install project dependencies with `npm i` command.

Test your installation with preconfigured test and script

`npm start`

💪 Ready for code!


### Scripts configured
- `start`: run de default script
- `build`: transpile TypeScript to es2020
- `test`: run tests
- `test:coverage`: run and show test coverage
- `test:watch`: interactive watch mode to automatically re-run tests
- `lint`: lint source files and tests
- `lint:fix`: automatically fix source files and test with linter
- `dependencies:purge`: remove installed packages and install all of them again
- `docs:generate`: generate CHANGELOG and documentation in Markdown format
- `docs:update`: generate CHANGELOG and documentation in Markdown format and commit changelog
- `docs:generate:html`: generate CHANGELOG and documentation in HTML format
