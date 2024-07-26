<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h2 align="center">Catze-Labs Nest server Template</h2>
    
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository for Catze-labs.

## Installation

1. Install NestJS and Default Dependencies

```bash
$ yarn install

# Create .env file
$ cp .env.example .env

$ yarn db-gen
```

2. Add .env file according to .env.sample

3. Create docker container for development  
   3.1. Customize docker-compose.yml file

```yaml
services:
  local:
    command: mysqld --character-set-server=utf8 --collation-server=utf8_general_ci
    container_name: [Your project name]-local
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    image: mysql
    ports:
      - '3306:3306'
  test:
    command: mysqld --character-set-server=utf8 --collation-server=utf8_general_ci
    container_name: [Your project name]-test
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    image: mysql
    ports:
      - '3307:3306'
  redis:
    image: redis
    container_name: [Your project name]-redis
    ports:
      - '6379:6379'

```

## Running the app

1. Run docker

```bash
$ docker-compose up
```

2. Run the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stay in touch

- Author - [Phantola](https://github.com/Phantola)
