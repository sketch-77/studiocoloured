# CREATING A FULLSTACK APP FROM SCRATCH

### Creating your repositories step-by-step
On your GitHub page, 
- [ ] select the + sign in the top right corner, and select ```New repository```
- [ ] Choose your project name (ideally in lower case)
- [ ] Make this private (you can change it to public later on)
- [ ] Initialize with a README if you haven’t already created one locally
- [ ] Select ```Create Repository```
- [ ] Invite Germinal as a collaborator (@germi)
- [ ] Clone repo as usual and start working!

### Express Scaffolding Step by Step:

- [ ] Scaffold the Express application with ```npx express-generator```

- [ ] Remove the ```/views``` folder (we don’t use it)

- [ ] Remove the view engine setup in app.js file (lines 12-14), because we’re not using any backend template renderers

- [ ] Change ```res.render('error')```; to ```res.send('error')```; (again, we’re not rendering anything from the backend, we’re just sending responses back to the client)

- [ ] Install packages that you may use, such as MySQL, Nodemon, or Dotenv: ```npm install mysql nodemon dotenv```

- [ ] In file ```package.json```, remove jade from the dependencies list

- [ ] Install dependencies with ```npm install``` or ```yarn```

- [ ] Copy the model folder from your previous projects. This contains the ```helper.js``` (which contains a nice wrapper around DB connections, so we can use the db() function from within our code), and it also contains the ```database.js``` file, which is the migration file for our project (you will need to modify this file so it contains YOUR database tables definitions and dummy data)

- [ ] Add a new script into your <package.json> file, that we will use to run our migrations: "migrate": "node model/database.js". Eventually, when you want to run migrations, you will need to run npm run migrate or yarn migrate

- [ ] Modify the start script so it uses nodemon instead of node: ```"start": "nodemon ./bin/www"```

- [ ] In the file ```./bin/www```, change the default port to ```5000``` (around line 15)

- [ ] If you need to store private data and passwords (such as your DB pass), create a ```<.env>``` file in the Express project root.

- [ ] Add a ```.gitignore``` file to your project. It should contain at least your ```node_modules``` and your ```.env``` file: ```/node_modules``` ```.env```

### React Scaffolding Step by Step
- [ ] Create React app with ```npx create-react-app client```.

- [ ] In VSCode, in ```src``` folder, delete the ```App.test.js``` , ```serviceWorker.js``` ,```setupTests.js``` and ```logo.svg```files.
- [ ] In ```index.js``` , remove serviceWorker setup (lines 9-12), and the import from line 5.

- [ ] In ```App.css``` remove the default styling, but keep the file for if you will use some css styling later.

- [ ] In ```App.js``` , remove the logo import in line 2, and the header content in lines 8 - 21.

- [ ] Change the functional component into class component, so you can add some state later on.

#### If you are working on a front-end only app, you are good to start coding and do not need to continue the following steps.
- [ ] You can navigate into the folder and 
- [ ] ```yarn start``` to run the app in your browser.

#### If you need to join this to an Express app you already created, continue with the following steps.

In ```package.json``` , 
- [ ] add a proxy for the back end in line 34; ```"proxy": "http://localhost:5000"```.
Back in the terminal, inside your React app,
- [ ] run ```rm -rf .git``` to avoid the folder being pushed to GitHub as a sub-module of your main repo.
#### If you need to join this to an Express app you already created, continue with the following steps.
- [ ] In your Express app, create a new folder named client, and copy all the contents of your React app into this folder.
You have a full stack app! Happy coding!

From Codeopesource Library
https://github.com/Bikranshu/express-react-boilerplate
HTML & CSS - Design and Build Websites https://wtf.tw/ref/duckett.pdf
Colour Palettes for Website Design https://colorhunt.co/
CSS Training https://github.com/aarongarciah/css-training
HTML Tutorial - Codecademy https://www.codecademy.com/learn/learn-html

React Cheatsheet for 2020 https://www.freecodecamp.org/news/the-react-cheatsheet-for-2020/

Express.js Docs https://expressjs.com/

Build RESTful APIs with Node and Express https://www.youtube.com/watch?v=pKd0Rpw7O48
RESTful API Designing guidelines — The best practices https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
