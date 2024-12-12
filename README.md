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
docker exec -it frontend npm run dev
```
then restart docker and enjoy!
```bash
docker compose restart
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
