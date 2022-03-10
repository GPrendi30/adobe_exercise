# Adobe & AEM Engineering Test
## Author: Gerald Prendi

Requirements from AEM_Engineering_Testv1.2.pdf

# GOAL
###  **Provide a http endpoint to accept decimal numbers and return as a response romal numerals**

## Requirements
### Base
- [x] Provide an implementation of a function to convert decimal numbers to roman numerals from a given range 1 - 255
- [x] Provide a http server, with a http endpoint 'rommannumeral' that accepts 'query' as a parameter.
- [x] Provide a testing suite
- [x] Provide documentaion on implementation detals
- [x] Provide clear instructions how to build 

### Extra
- [x] Extend range from 1 - 255 to 1 - 3999
- [x] Compute ranges in parallel using multithreading or asynchronous calls.
- [x] Provide DevOps capabilities:
    - [x] Docker container
    - [x] Monitoring
    - [x] Metrics
    - [x] Logging


### Plan of work
1. Read the provided pdf containing the exercise
2. Understand and lay out the Goal and Requirements
3. Select the tech stack
4. Select the feature set that will be provided
5. Research on Roman Numerals, and how they are converted from decimal representation
6. Write unit tests
7. Start implementing the functionality
8. Refactor code and tests
9. Provide base requirements + documentation
10. After base requirements provided, continue with the extras
11. Start by writing tests
12. Extend range from 1 - 3999
13. Extend functionality with ranges, then compute using async calls
14. Provide docker container
15. Provide regression testing and automatic docker image deployment to dockerhub
16. Provide monitoring through prometheus and grafana
17. Provide logging using morgan and winston
18. Perform static code analysis
19. Deliver final Release 


## Roman Numerals
Definition from wikipedia
> Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. 

> Numbers in this system are represented by combinations of letters from the Latin alphabet. 

>| Symbol |  I  |  V  |  X  |  L  |  C  |  D  |  M  |
>| ------ | --- | --- | --- | --- | --- | --- | --- |
>| Value  |  1  |  5  |  10 |  50 | 100 | 500 | 1000|

> A numeral of the previous order can be added in front of another numeral, implying x less than y, where xy are two numerals that are adjacent
> (i.e) V is 5, while IV is 4 (1 less than 5); L is 50, while XL is 40 (10 less than 50);

## Project Layout
| Name | Children | Description |
| --- | --- | --- |
|.github/|    | folder to store github actions automation scripts |
|bin/ |     |     |           
|     | www | driver code for the project, start point of the project where the webserver is actually created and listens to a port. |
| code_analysis/ | | static code analysis reports generated by snyk |
|docs/|     |       empty folder for documentations, run `npm run docs` to generate docs in this folder |
|monitoring/ |  | required files and configurations for monitoring |
|     | grafana-data | required for grafana dashboard |
|     | docker-compose | a docker compose yaml file to automate monitoring |
|     | prometheus.yml | prometheus config |
|src/ |     |       source code of the application |
|  | conversion/    |       provides conversion methods, in this case it has convert decimalToRoman |
|  |
|  | routes/        |       http routes folder, this is where the different endpoints logic goes |
|  | test/          |       test package |
|  | app.js         |       application entry, where all the logic gets assembled |
| .eslint.json |       |       linter config file | 
| .gitignore   |       |       configuration for git to ignore certain files, and not to commit them |
| package.json |       |       the application npm package, holds dependencies and other crucial information for the project |
| Dockerfile   |       | A docker 'recipe' to build a docker image |
|  README.md   |       |       (this readme)   |


## How to build and run

To install dependecies
> `npm install`

To start nodejs application
> `npm start`


To package and ship the application in docker container
> `docker build . -t adobe_exercise`

> `docker run -d -p PORT:8080 adobe_exercise`

* Where PORT is the port you want to map to localhost

## Scripts

Provided scripts with a description

| Script Name | Description |
|    ---      |     ---     |
| `npm install` | Installs all dependencies found in package.json |
| `npm start`   | Start the web server |
| `npm test`    | Does linting on the source then executes test package |
| `npm run lint` | Does linting and ouputs the warning and errors |
| `npm run lint:fix` | Fixes errors and warning that the linter is able to fix |
| `npm run docs` | Generate documentation from jsdoc comments in the code and outputs a static page in /docs |
| `npm run test:nolint` | Only executes the test package with no linting | 
| `npm run start:production` | starts production server with logger level set to a different level |
| `npm run test:coverage` | gives you a report of the test coverage |

## Dependencies

To have a look at the all the dependencies that have been used have a look at the Insights tab in the Github Repo of the project.
Here I will be providing only a small list of the most important dependencies used.
|  Dependency | Description |
|     ---     |     ---     |
|   express   |  web framework for nodejs |
|   mocha, chai, supertest | used for testing |
|   eslint    | (pattern checker) linter for javascript, configuration found on .eslintrc.json|
| dotenv  | Loads environment variables from .env file |

## Monitoring Stack

Using the magic of docker-compose
1. Build an image of my application and run it
2. pull and run a prometheus container
3. pull and run a grafana container
4. use a grafana dashboard (I use the dashboard provided by somebody else, for more look at 'Sources')

To run the monitoring services and access metrics
> `cd monitoring/`

> `docker-compose up -d`

> go to the browser and select localhost:3000 (default for grafana) 

> select Application Telemetry dashboard and Adobe-Exercise

Currently provided metrics
- Requests per second
- Request Duration

## Features
- web server with http endpoint 'romannumerals'
- use of web frameworks such as express
- decimal to roman numeral conversion
- asynchronous range decimal to roman numeral conversion
- documentaion using jsdoc
- use of TDD (test driven development)
- linter for style checking
- npm scripts 
- monitoring with Prometheus and Grafana
- Dockerfile
- Automated regression testing, and deployment to DockerHub with Github Actions
- Logging with morgan and winston, to a rotating log file or the console(depending on whether you are on dev or production mode)
- Security patches after static code analysis
- Real time dependency vulnerability monitoring through snyk and dependabot

## Docs

You can generate a static page containing the documentation from jsdoc comments using:
> `npm run docs`
> They will be generated in the /docs folder

## Automated pipelines with Github Actions

Automated Workflows:
- Regression Testing
    - gets triggered on 'push' events
    - run_tests
    - pull and builds the project
    - starts the webserver
    - runs the tests
    - if tests pass, workflow passes
    - else if fails

- Docker Image Deployment
    - gets triggered on 'push' events
    - run_tests
    - logins to dockerhub using credentials
    - gets metadata from the repo, for naming and tagging
    - builds and pushes to dockerhub

You can check the status of the workflows under the 'Actions' tab or by checking the tick(correct) or cross(wrong) mark near your commit hash after you push to the optional branch.

## Sources

[Roman numerals explanation and definition](https://en.wikipedia.org/wiki/Roman_numerals)

[Decimal to Roman numeral conversion algorithms](https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/)

[Monitoring with Prometheus and Grafana, also the grafana dashboard](https://www.youtube.com/watch?v=m2zM3zOZl34)