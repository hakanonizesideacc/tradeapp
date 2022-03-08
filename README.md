# Eva Exhange Trading Platform

# Installation

## 1 - Local Installation

### Requirements

- Postgresql
- Node
  Clone the repository to your local workspace.
  Configure your postgres credentials from /config/config.js file.
  Then run <code>npx sequelize-cli db:migrate</code> to initialize database with tables data.
  After that run <code>npx sequelize-cli db:seed:all</code> to fill database with mock data.
  If you get any error you can try installing sequelize-cli globally by <code>npm install -g sequelize-cli </code>

## 2- Docker Installation

### Requirements

- Docker
- Docker Compose
- Clone the repository to your local workspace.
  Run <code> docker-compose up </code> command.

  After that to initialize database with mock data.
  You need to connect docker instance either with
  <code> docker exec < container-id > </code> or if you use windows,
  you can just use Docker Desktop then find container and click to cli button.
  After that you just need to run commands below.
  <code>npx sequelize-cli db:migrate</code>
  <code>npx sequelize-cli db:seed:all</code>

### Using the app.

With the provided postman collection. You make requests to specific endpoints.
In the app;
You can do CRUD operations to Users, Portfolios and Shares.
Also you can buy and sell a share.
There is no authentication for users to sell or buy stocks. You just need to include username, rate symbol and amounth.
When a transaction happens application records transactions to database by their types. (etc. 'buy' and 'sell')
Also you can see Users Share's on PorfolioShare database.
