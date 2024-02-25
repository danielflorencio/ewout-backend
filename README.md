# eWout - Easy Workout backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a fitness application project using TypeScript, Nestjs, prisma ORM and postgresql as it's database.

## Complete features 

- Authentication.
- Rate limiting.
- Enable CORS.

## Todo list

- Encryption and hashing (https://docs.nestjs.com/security/encryption-and-hashing);
- Finish the database configurations and migrations creation;
- Implement refresh tokens in the authentication;
- CSRF protection (https://docs.nestjs.com/security/csrf);
- Verify logging configuration.

## Installation

```bash
$ npm install
```

## Environment Variables

Create a .env file with the following properties: 

DATABASE_URL="postgresql://yourPostgresUser:password@localhost:5432/db-name"
DIRECT_URL="postgresql://yourPostgresUser:password@localhost:5432/db-name"
JWT_SECRET="yourSecretKey"

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Overall Nestjs notes

- nest commands: 
-- "nest g module/controller/service/resource moduleName" 
--- The resource starts a module with everything you need. Module, controller, service, dtos and entities.
--- Ps.: entities might not be needed when you're using the prisma model schemas.

- nest specifics inner-workings:

-- The order of the controllers and how they're organized does matter. 
--- So if a get route /users is above all other routes, and the second route is /users/:id, the third route cannot be /users/interns (consider interns a collection of users with an 'intern' role.)
--- Nest js in this case would try to find the id of a specific intern and return it to you.
--- In this case, /users should be first, /users/interns should be second, and /users/:id should be third. 


-- A Provider doesn't necessarily NEED to be a service, but it often is. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" these objects can largely be delegated to the Nest runtime system.

-- Injecting a service in a controller:
--- constructor(private readonly usersService: UsersService) {}
--- Nest js injects services as a singleton with the above line, that means that if the service has already been created elsewhere, you don't need to recreate it again (const usersService = new UsersService()), 

-- All params are strings and you have to convert them to the necessary types.
--- For this, you can use an unary + (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) before passing the values to their respective service methods.
--- So when you receive a param, you take the (Param id) and pass it to the new method like this: myService.myMethod(+id);

-- PIPES in Nestjs.

-- A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface. They're specific types of middlewares used for both transformation and validation of data.


# Prisma Commands

- For installing prisma as a dev dependency: 

```npm i prisma -D```

- For generating the first database: 

```npx prisma migrate dev```

- For creating the prisma folder in your project:

```npx prisma init```

- For starting the database from your first schema:

```npx prisma migrate --name init```

- For making changes to your model and applying them to the Database:

```npx prisma generate```
```npx prisma migrate dev --name property_change```

---- A question I have: in the video tutorial he is importing just a single DatabaseModule for every single service... 
---- But shouldn't i have a DatabaseModule (or a repository) for each entity?


