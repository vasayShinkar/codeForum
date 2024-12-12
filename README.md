This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## What is this project about?
This project was created so that programmers could post articles about their interests

## what technologies are used in the project?
*  `Next.js` - to implement the server side rendering
*  `React`
*  `Mongoose` - to simplify the work of mongo db
*  `Oauth` - To make an authorization implementation using git hub
*  `docker` - to create microservices, one of which will store data for mongo db
*  `graphql` - To get data from the API and transfer it to the application

## How run project?
run this command in the console

```bash
docker compose up -d
```
then run command to download dependencies 
```bash
docker exec -it frontend npm install
```
then restart docker and enjoy!
```bash
docker compose restart
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



