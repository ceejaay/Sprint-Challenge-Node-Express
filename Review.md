Chad Jemmett
# Review Questions

## What is Node.js?
 Node.js is Javascript for the backend. It takes Javascript out of the browser. With Node, developers can write programs that were usually written by C or Java. With Node, a dev can write javascript for the browser and use javascript for the backend. This means less confusion when switching tasks.

## What is Express?
  Express is a lightweight code library for web applications. It uses Node to serve http requests. It allows things like middleware for servers and tools for making an api.

## Mention two parts of Express that you learned about this week.
  Two things I learned about Express. It's unopinionated. It doesn't care about databases or middleware. It can serve static content.

## What is Middleware?
  Middleware is software, sometimes just a function that goes between the HTTP request/response and Express. Middleware can do any number of jobs. Logging requests, like Morgan. You can also write custom middleware. You can write a program that changes the input or output of an HTTP request. Middlware can also provide website authentication  of users and requests.

## What is a Resource?
  A resource is anything a RESTful application can deliver. Any type of file. Text, audio, JSON. I think of it like an item in the library. Book, magazine or movie. HTTP verbs can get it. A resource is the noun to the HTTP verbs.

## What can the API return to help clients know if a request was successful?
  We can know an HTTP request is successful by sending a 200 code. We can also send a JSON object. 

## How can we partition our application into sub-applications?
  We can partition our application into sub-applications in two ways. First we can use Express routers to break up endpoints. A developer can separate endpoints based on the type of resources they serve.
Second, a developer can put middleware in different files. This keeps the server file free of clutter.

## What is express.json() and why do we need it?
  Express.json is middleware that  makes it possible to send a resource as a JSON object. 
