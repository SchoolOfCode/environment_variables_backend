
![Project Clean-Up](https://user-images.githubusercontent.com/98705391/184337846-b06b80b3-98d3-40b4-912b-dc429ad54f72.png)
# Welcome To Project Clean-up
This is the repository for the back-end of Project Clean-up, an app created as a final project in the [School of Code's](https://www.schoolofcode.co.uk/) Bootcamp 12 (25 April - 16 August 2022). If you'd like to see the front-end, please check out the [git repository](https://github.com/SchoolOfCode/environment_variables_frontend).

![Earth, map, and map marker emojis](https://user-images.githubusercontent.com/98705391/184339535-2eb89ee6-2c6b-4376-baf3-2f5c4720e582.png)

### 🤔 **The Problem** 
Pollution and litter is a growing environmental crisis. Animals can choke on or ingest litter, suffocate in plastic bags, get entangled in elastics and plastics, or suffer injuries from discarded glass, metals and hooks. It can also present a danger to plant life, with flammable materials presenting a fire hazard, leak contaminants which can damage plants and inhibit their growth, or reduce light availability and moisture. 

### 🧠 **Our Solution** 
Our aim is to help protect the wildlife and beauty of our green spaces by reducing litter and so the hazards it presents. Project Clean-Up is a full-stack app which enables people to join and create litter clean-up events in their communities—or further afield, if that's what takes their fancy! 

### 🛠️ **How It Works** 
All of the clean-up events are stored in a database. The front-end makes requests to the database to display clean-up statistics, and populate the front page map with all events. Users can choose to join an event without registering, or register using Auth0 to start their own event⁠—which is then posted to the database and so visible on the front page map. After an event, the host can log their clean and submit the number of volunteers in attendance, and the amount of litter collected, which is then reflected in the statistics displayed on the page. A weather widget is included, along with advice for various weather conditions, so that users can ensure they are adequately prepared for the Great British weather on the day of their clean-up!


## Authors (aka, the Environment Variables)
**Click our names to view our GitHub Profiles** 

- [Emma Gill](https://github.com/SurfingElectron)

- [Amira Gucher-Blackman](https://github.com/amiragucher)

- [Blake Lawrence](https://github.com/BlakeLawrence)

- [Edgaras Markunas](https://github.com/EdMark11)

- [Simran Rai](https://github.com/srai98i)

- [Jena Zubaydi](https://github.com/jena-84)


## App Features
The app offers a number of features to achieve its goal of helping users join and create litter clean-up events:
- 🗺️ **Interactive maps**, so users can locate existing clean-ups, or select a location to start their own; 

- ⛅ **A weather widget**, to allow users to check the weather for an upcoming event and prepare accordingly; 

- 📱 **Responsive design**, so the app can be used just as easily on mobile devices as it is on computers;  

- 💽 **A custom database**, which stores all clean-up events, and responds to HTTP requests via our back-end;

- 🔒 **User authentication**, to minimise spam, irrelevant or malicious postings, and to facilitate future features.

## Installation 💻
**Clone the front-end and back-end repositories to your computer:**

```bash
https://github.com/SchoolOfCode/environment_variables_frontend
https://github.com/SchoolOfCode/environment_variables_backend

```

**Install the dependancies for both with the following command:**
```bash
npm install
```

To run this project, you will need to add the following environment variables to your back-end .env file:

`DATABASE_URL = <*Replace this text with URI*>`


## Tech Stack

Node.js

 Nodemon, Babel, Jest, Supertest, Dotenv, 
 
 Express, PostgreSQL, Cors, Morgan

 Heroku

<br/>

---

<br />

## ***Running Tests***

To run tests, run the following command

```bash
  npm run test (or npm t)
```

<br/>

---

<br />

## ***Usage/Examples***

Here are some basic examples of how to use this API:

You can set up some custom scripts to run specific files inside this project;

Scripts can be found inside of the package.json file

**Examples of scripts:**

Create a table:
```javascript
"db:createStartTable": "node -r dotenv/config ./db/scripts/startClean/createStartTable.js"
```

Populate the table:
```javascript
"db:populateStartTable": "node -r dotenv/config ./db/scripts/startClean/populateStartTable.js"
```

**Example of how to run these scripts:**
Creates a table in Heroku
```bash
npm run db:createStartTable
```

Populates a table in Heroku
```bash
npm run db:populateStartTable
```

**You can also populate tables remotely on your front end through post requests:**

Example of using a post request:

```javascript
const handleSubmit = async function (values) {
    const response = await fetch(`${url}/logclean`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cleanname: values.cleanname,
        bags: values.bags,
        volunteers: values.volunteers,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
```

<br/>

---

<br />

## ***API reference list***

**For GET requests:**

Get all start clean data:
```
http://localhost:5000/startclean
```

Get all log clean data:
```
http://localhost:5000/logclean
```

Get all join clean data:
```
http://localhost:5000/joinclean
```

**Using different routes:**

Sum of volunteers:
```
http://localhost:5000/logclean/volunteers
```

Sum of bags collected:
```
http://localhost:5000/logclean/bagscollected
```

**And the same is available for start clean data:**

Total cleans:
```
http://localhost:5000/startclean/totalcleans
```

<br/>

---

<br />

## ***Appendix***

**Here are some links to documentation that could be helpful with using this server:**

- Node.js - https://nodejs.org/en/docs/

- PostgreSQL - https://www.postgresql.org/docs/

- Heroku - https://devcenter.heroku.com/categories/nodejs-support

- Jest - https://jestjs.io/docs/getting-started

- Express - https://expressjs.com/en/starter/installing.html


