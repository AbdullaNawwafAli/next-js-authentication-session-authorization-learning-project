# Next.JS - Authentication / Session Management / Authorization project
## Introduction / Overview
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) made with the intention to learn (will add more as i learn other topics that i learnt in my pursuit of learning authentication):
- The fundamentals of authentication,session management and authorization.
- What would be the best folder structure when developing a next.js application(obviously this is different for every individual, I mean personally for me)
- App router (mainly as a sub topic)
- Client and Server side rendering. (For general knowledge when developing next.js, this knowledge is primarily here in terms of security concerns, such as where to fetch sensitive data, decrypt JWT tokens, etc ....)
- What is the use of API routes and its general uses
- What are server actions and its general uses.
- Using MUI in front end.

## Packages/Libraries used (IDK if this is helpful in terms of setting up the project)
- Zod
- RHF
- MUI (trying to use this right now).
- Jose (for session management)

## Getting Started
Just run the development server because i haven't dockerized this project :

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Takeaways and thoughts i had after finishing this project
- I think all files should be labeled 'use client' or 'use server' regardless of whether components are default server side, this way you know if something becomes client side by a mistake and you can catch it.
- I believe all pages should be server side always and its components if need be client-side.
- What is the best way to use server actions? when should i differentiate between the two ways such as using the API route instead.
- Data should always be fetched and handled on the server side first for security.
- Is the way i've handled the token secure? how would this application be vulnerable? I've made sure i handled the token on the server-side as well when decrypting and even assigning the token.
- I added doubled zod verification in the action for the login form as well as in the API route call to make sure nothing can be injected. (is this good practice as well as secure?)
- Where should the middleware file be located? does it expose the security of the application
- Where should server actions be located? next to component that uses it? or in a separate actions folder?
- Overall i've been given advice that this is a good boiler plate i should keep for future reference or use hence why i will be keeping it.

