# Studio Coloured*PROJECT TRACKING TOOL*

The initial contact will be via studio coloured website where a current client is given a username and password to access the CLIENT side. This will allow the client access to client projects and each project's tasks.
Client access will allow:
[] tracking the various projects,
[] tracking tasks of a project,
[] add comments (ammendments required, comments)

This also allows for clarity during the project creation phase, tasks are clear and concise. The USER will be able to add comments or changes that will be updated by ADMIN. The data will be updated to the database and the USER will receive notification via email once the data is fetched and displayed on the USER side.

The USER will be able to view the project status (this project is 50% complete) as well as individual task status (this task is 30% complete). During the various stage of the task and project phase, images of the development process will be possible.

## Full Stack Development App

For this full stack app we will be using React, Node/Express, and MySQL, Express, CSS (maybe Tailwind / Bootstrap).

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`

- Check if the dataase is there : `show databases;` // studiocoloured

- Create a new database called studiocoloured: `create database studiocoloured`
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=studiocoloured
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a table called 'students' in your database.

- Make sure you understand how the `students` table is constructed. In your MySQL console, you can run `use facebook;` and then `describe students;` to see the structure of the students table.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.

## Basic Requirements

Create a webpage with the following functionality:

- [ ] A list of clients.
- [ ] A form to add new client. ( this information allows freelance insight into client) There should be room to input:
      company name or website URL, contact person: first and last names, separately, contact email address,
  - After clicking a button in the form, the new student should be added to the database and displayed on the page.
- [ ] Each student can be deleted with a delete button. After clicking on this button, student should be deleted from the database and the updated list of students shown on the page

#### DB SCHEMA DESIGN

![schema](/img/db.png)
&nbsp;
&nbsp;

![databaseSchema](https://app.dbdesigner.net/designer/schema/330828)
&nbsp;
&nbsp;

#### USER FLOW

![USER](/)
&nbsp;
&nbsp;
