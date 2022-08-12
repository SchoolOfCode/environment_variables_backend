![enter image description here](https://i.im.ge/2022/08/12/FeSg1M.Project-Clean-Up-1.png)
# Project Clean-up Backend
![enter image description here](https://i.im.ge/2022/08/12/OMqv0S.Group-23.png)

This is the final project app we created while attending the School Of Code

(April - August 2022).

  

Project Clean-Up is an app that allows people to create or join

litter cleanup events.

  

We chose this app as we are all aware of the pollution crisis the

world is facing and we wanted to be pro-active about addressing this.

  

**This documentation is for the backend of the Project Clean-up app.**

If you're interested in the frontend specifically,

go to [https://github.com/SchoolOfCode/environment_variables_frontend]**

  



   

## **Authors (aka, Team Environment Variables)**
**Click our names below to view out GitHub Profiles:**

- [Emma Gill](https://github.com/SurfingElectron)

- [Amira Gucher-Blackman](https://github.com/amiragucher)

- [Blake Lawrence](https://github.com/BlakeLawrence)

- [Edgaras Markunas](https://github.com/EdMark11)

- [Simran Rai](https://github.com/srai98i)

- [Jena Zubaydi](https://github.com/jena-84)

  

## Environment Variables

  

To run this backend repository, please create a .env file in the root of the folder and inside there add your credentials in the following format; (these credentials can be found in your Heroku credential settings)

  

```

DATABASE URI = <*Replace this text with URI*>

```


## **Run Locally**

  

Navigate to where you would like to save the project

  

```bash

cd  <chosen directory>

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

  



## How the server works

  

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

  



  



  


  

## Tech Stack

  

**Engine:** 
![enter image description here](https://camo.githubusercontent.com/a1eae878fdd3d1c1b687992ca74e5cac85f4b68e60a6efaa7bc8dc9883b71229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465)

**Deployed on:**
![enter image description here](https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)

**Dev Dependencies:**
![](https://camo.githubusercontent.com/5ec7b7ed343219da6b2213349bacdc389803950b5298464b35e76f7ab6ccf27d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6573742d4332313332353f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d7768697465) ![enter image description here](https://i.im.ge/2022/08/12/OMiyCY.image-23-4.png) ![enter image description here](https://i.im.ge/2022/08/12/OM0ptD.Group-24.png) 

  

**Dependencies:**
![](https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642) ![](https://camo.githubusercontent.com/281c069a2703e948b536500b9fd808cb4fb2496b3b66741db4013a2c89e91986/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f737467726553514c2d3331363139323f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465) ![enter image description here](https://camo.githubusercontent.com/55037e0ff8e2c9df84ad631c3d0443a7316776ede7459a5872ccb336d7df2781/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465)

  

**Data storage:** 
![](https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465) ![](https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465)

 
  

## Running Tests

  

To run tests, run the following command

  

```bash

npm run test (or npm t)



  
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

const  handleSubmit  =  async  function (values) {

const  response  =  await  fetch(`${url}/logclean`, {

method: "POST",

headers: { "Content-Type": "application/json" },

body: JSON.stringify({

cleanname: values.cleanname,

bags: values.bags,

volunteers: values.volunteers,

}),

});

const  data  =  await  response.json();

console.log(data);

};

```



  

## API reference list

  

**For GET requests:**

  

**Get all start clean data:**

```

http://localhost:5000/startclean

```

  

**Get all log clean data:**

```

http://localhost:5000/logclean

```

  

**Get all join clean data:**

```

http://localhost:5000/joinclean

```

  

**Using different routes:**

  

**Sum of volunteers:**

```

http://localhost:5000/logclean/volunteers

```

  

**Sum of bags collected:**

```

http://localhost:5000/logclean/bagscollected

```

  

**And the same is available for start clean data:**

  

**Total cleans:**

```

http://localhost:5000/startclean/totalcleans

```

  


  

## Appendix

  

**Links to documentation that could be helpful with using this server:**

  

- Node.js - https://nodejs.org/en/docs/

  

- PostgreSQL - https://www.postgresql.org/docs/

  

- Heroku - https://devcenter.heroku.com/categories/nodejs-support

  

- Jest - https://jestjs.io/docs/getting-started

  

- Express - https://expressjs.com/en/starter/installing.html