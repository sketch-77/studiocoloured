# Studio Coloured

## _PROJECT TRACKING TOOL_

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

```DB_HOST=localhost
    DB_USER=root
    DB_NAME=studiocoloured
    DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a tables called 'clients', 'projects', 'tasks' and 'images' in your database (studiocoloured).

- Make sure you understand how the `clients` table is constructed. In your MySQL console, you can run `use studiocoloured;` and then `describe clients;` to see the structure of the students table.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.

## Basic Requirements

The webpage ADMIN side will have the following functionality:

- [ ] A list of clients.
- [ ] A form to add new client with the following inputs: - company, firstname, lastname, email, mobile, url
  - After clicking a SUBMIT button in the form, the new cleint should be added to the database and displayed on the page.
- [ ] Each client can be deleted with a delete button. After clicking on this button, teh client should be deleted from the database and the updated list of clients is shown on the page.
- [] the clients will have a PRIMARY key.

- [ ] When a client is clicked on in the list of clients, you get a list of projects.
- [ ] A form to add new project with the following inputs: - title, summary, project_status
  - After clicking a SUBMIT button in the form, the new project should be added to the database and displayed on the page.
- [ ] Each project can be deleted with a delete button. After clicking on this button, the project should be deleted from the database and the updated list of projects is shown on the page.
- [] the images will have a foreign key relation with the client_id.

- [ ] When a project is clicked on in the list of projects, you get a list of tasks.
- [ ] A form to add new task with the following inputs: - title, summary, task_status
  - After clicking a SUBMIT button in the form, the new task should be added to the database and displayed on the page.
- [ ] Each task can be deleted with a delete button. After clicking on this button, the task should be deleted from the database and the updated list of tasks is shown on the page.
- [] the tasks_id will have a foreign key relation with the project_id.

- [ ] When images is clicked on in the list of images, you get a list of images.
- [ ] A form to add new image with the following inputs: - alt_text, img_url
  - After clicking a SUBMIT button in the form, the new image should be added to the database and displayed on the page.
- [ ] Each image can be deleted with a delete button. After clicking on this button, the image should be deleted from the database and the updated list of images is shown on the page.
- [] the images_id will have a foreign key relation with the project_id.

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
