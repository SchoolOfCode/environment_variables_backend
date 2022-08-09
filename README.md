
# ***Project Clean-up***
This is the final project app we created while attending the School Of Code
(April - August 2022).

Project Clean-Up is an app that allows people to create or join
litter cleanup events.

We chose this app as we are all aware of the pollution crisis the
world is facing and we wanted to be pro-active about addressing this.

**This documentation is for the backend of the Project Clean-up app.
If you're interested in the frontend specifically,
go to [https://github.com/SchoolOfCode/environment_variables_frontend]**

<br/>

---

<br />

## ***Authors (aka, Team Environment Variables)***
- [Emma Gill](https://github.com/SurfingElectron)
- [Amira Gucher-Blackman](https://github.com/amiragucher)
- [Blake Lawrence](https://github.com/BlakeLawrence)
- [Edgaras Markunas](https://github.com/EdMark11)
- [Simran Rai](https://github.com/srai98i)
- [Jena Zubaydi](https://github.com/jena-84)

<br/>

---

<br />

## ***Environment Variables***

To run this backend repository, please create a .env file in the root of the folder and inside there add your credentials in the following format; (these credentials can be found in your Heroku credential settings)

```
DATABASE URI = <*Replace this text with URI*>
```

<br/>

---

<br />

## ***Run Locally***

Navigate to where you would like to save the project

```bash
  cd <chosen directory>
```

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/environment_variables_backend
```

Navigate into the project directory

```bash
  cd environment_variables_backend
```

Install dependencies

```bash
  npm install (or npm i)
```

<br/>

---

<br />

## ***How the server works***

Make sure you're inside the project directory (follow 'Run Locally' section)

To start the server:

```bash
  npm run dev
```

 - The server should be running at http://localhost:5000
 - The server will update automatically to any changes, you don't need to close it everytime you wish to make a change

To close the server, press the following keys; (make sure you're inside the terminal)

```bash
  ctrl C
```

<br/>

---

<br />

## ***Tech Stack***

**Engine:** Node.js

**Dev Dependencies:** Nodemon, Babel, Jest, Supertest, Dotenv, 

**Dependencies:** Express, PostgreSQL, Cors, Morgan

**Data storage:** Heroku

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


