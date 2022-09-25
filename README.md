
# Covid-19 Hospital API

An API created using NodeJS for the agency in which different client can be relate to different agency.



## Run Locally

Clone the project

```bash
  git clone https://github.com/amitkr24/agency.git
```

Go to the project directory

```bash
  cd agency
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Documentation

Root Hosted Link - https://agency-api.onrender.com/

Routes :

    a. /user/register - Registers a new User.
    b. /user/login - Authenticates and returns the JWT token to be used.
    c. /agency/register - Allows a user to register a new agency (JWT Auth enabled).
    d. /client/:id/create - Allows a user to create a client (JWT Auth enabled).
    e. /client/:id/update - update client details
    f. /client/:id/clients - List of clients with the agency name. (JWT Auth enabled).

Data that needs to be sent with a route :
    
    a. /user/register - name, email, password (Form type:x-www-form-urlencoded)
    b. /user/login - email, password (Form type:x-www-form-urlencoded).
    c. /agency/register - JWT Token (In Authorization ->choose bearer token & enter valid token), name, address1, address2,state,city,phone (Form type:x-www-form-urlencoded).
    d. /client/:id/create - JWT Token (In Authorization ->choose bearer token & enter valid token), name,email,phone,total_bill (Form type:x-www-form-urlencoded).
    e. /client/:id/update - JWT Token (In Authorization ->choose bearer token & enter valid token), name,email,phone,total_bill
    f. /client/:id/clients  - List of clients with the agency name.

Folder Structure

    a. index.js - Server runs here
    b. model - Contains all the models for user, client, agency.
    c. routes - Contains all the routes.
    d. controller - Contains all the controllers.
    e. config - Contains all the config files.



  
