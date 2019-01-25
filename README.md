# React - Gallery of My Life

This project is my first attempt at simple CRUD react-app after learning react and material-ui.  Skills practiced while building this app include client-side form validation with regular expression, conditional rendering, axios get/put/post/delete requests git branching, and material-ui cards, icons, and buttons.  

## Built With
Front-end
- react.js
- Material-ui
- axios

Back-end
- node.js
- express.js
- pg
- postgresql
- postman
- postico

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Postgresql] (https://www.postgresql.org/)

### Installing

1. Download from github
2. `npm install`
3. create database using postico code provided in database.sql 
3. `npm run server`
4. `npm run client`
5. open project using Chrome at (http://localhost:3000/)

## Screen Shot

! [runningApp] (wireframes/running-app.png) 

### Completed Features
[X] Move the data into a database (postgresql)
[X] Add a form (new **component**) that allows a user to POST a new gallery item
  [X] Client side form (use absolute URL for images)
  [X] Server side route for posting an image
[X] Ability to delete a gallery item
[X] Add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)

### Next Steps
[] Implement [uppy](https://uppy.io/) for image upload 
[] Style form using material-ui
[] Update app to use react-router 
[] Have navbar to switch between gallery and photo submit form

## Authors
* Anthony Dunahee

## Acknowledgements
Special thanks to Prime Digital Academy instructional staff for shaping task and providing feedback on refactoring my conditional rendoring. 
