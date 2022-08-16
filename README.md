
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

`DATABASE_URL = <place your database URL here>`


## Tech Stack
### Back-end & database
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/-nodemon-blue?style=for-the-badge&logo=nodemon)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)


### Testing
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Jest mini-banner](https://camo.githubusercontent.com/5ec7b7ed343219da6b2213349bacdc389803950b5298464b35e76f7ab6ccf27d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6573742d4332313332353f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d7768697465)
![Supertest mini-banner](https://img.shields.io/badge/-supertest-blue?style=for-the-badge&logo=jest)


## Usage/Examples
Scripts to create, populate and drop tables in the database are inside the package.json file.

### Script Examples
Create a table to log new cleans:
```javascript
"db:createStartTable": "node -r dotenv/config ./db/scripts/startClean/createStartTable.js"
```

Populate the above table with seed data:
```javascript
"db:populateStartTable": "node -r dotenv/config ./db/scripts/startClean/populateStartTable.js"
```

### Executing Script Examples
Create a table to log new cleans:
```bash
npm run db:createStartTable
```

Populate the above table with seed data:
```bash
npm run db:populateStartTable
```

### Testing
To run the existing Jest tests, execute the following command:

```bash
  npm run test (or npm t)
```

## Challenges and how we overcame them
There were numerous challenges on this project, often rooted in the circumstance of a team of junior developers grappling with new technologies. In general, we used our skills at working together, navigating documentation, parsing error messages, and researching solutions to find the solutions we needed.

**Testing with Jest & Supertest**: We encountered some initial teething difficulties with implementing unit tests on the back-end. After some research and discussion with a School of Code coach, we were able to resolve those problems to write effective tests to ensure our API and database responded in the way we expected.


## What we took from this experience
Our goal for this project was to work together well as a team, learn as much as we could, and at the end of it, present a functional and attractive app. We facilitated this by deciding on a team manifesto at the very start, which included important topics like how we wanted to approach discussions, make decisions, and resolve conflicts. We held true to our manifesto throughout the process, and as a result, any differences of opinion were smoothly resolved and the final decision embraced by all.

Working in an Agile way was an invaluable experience. We approached the project in an iterative way, and with each sprint updated or added features so we always had a functioning app. The ability to quickly pivot also helped us when we had to make changes due to our user’s feedback, adding clarity and functionality to our app to make it more usable. 

We had a number of stretch goals, and with more time we would have added user profiles, notifications of upcoming and new events, and would have liked to spend some time refactoring duplicate code. 

All in all, we had a fun and fantastic time together, worked hard, and are all very proud of our final product! 


## Appendix I: API Reference
Get all existing cleans:
```
http://localhost:5000/startclean
```

Get all the data from logged cleans:
```
http://localhost:5000/logclean
```

Sum of volunteers:
```
http://localhost:5000/logclean/volunteers
```

Sum of bags collected:
```
http://localhost:5000/logclean/bagscollected
```

Total cleans:
```
http://localhost:5000/startclean/totalcleans
```


## Appendix II: Third Party Documentation
The following is a list of documentation which may be useful:

- Node.js: https://nodejs.org/en/docs/

- Express: https://expressjs.com/en/starter/installing.html

- PostgreSQL: https://www.postgresql.org/docs/

- Heroku: https://devcenter.heroku.com/categories/nodejs-support

- Jest: https://jestjs.io/docs/getting-started

- Supertest: https://www.jsdocs.io/package/supertest