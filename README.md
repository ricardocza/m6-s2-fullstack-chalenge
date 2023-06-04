## First Steps
1) First you need to get this project, either by using `git clone` or downloading it
2) Then you need to install all the libraries, run this command in a bash terminal inside the downloaded folder:
```console
npm install
```
3) This Project uses PostgreSQL as database, so you will need to create a database for it, <br>
To do so, access psql from a terminal, and run:
```console
CREATE DATABASE backend;
```
Where "backend" is the name of the database

4) Now, inside your project folder, locate .env.example, rename it to .env
5) Inside the .env file, fill with with your personal information, so it should look something like:
```
PORT=4000

SECRET_KEY=somesecretekey
EXPIRES_IN=12h

DATABASE_URL=postgres://user:pass@localhost:5432/backend
NODE_ENV=dev
```
Where "user" and "pass" should be your username and your password.<br>
Leave the PORT as 4000, as the front end is making requests to this port, if you change this, you will need to access `src\services\api.ts` inside your front end project folder, and change the port there accordingly.

5) Now you are ready to launch the application, do it by running the following command:
```console
npm run dev
```
## API
Checkout the [API Documentation](https://ricardocza.github.io/m6-s2-fullstack-chalenge-API/), to verify all requests available so far.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
