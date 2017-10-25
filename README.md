# Project4

## Development server

This project has multiple services, and the easies way to run it is with Docker and Docker-Compose. If you want to do it without Docker, there is a guide below.

### Setup with Docker

First you need to install [Docker](https://www.docker.com/community-edition#/download) and [Docker-Compose](https://docs.docker.com/compose/install/)

Export environment variables (This is *NIX style, you fix Windows some other way, I don't know how).

Clone this repository and install dependencies
``` bash
git clone https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-4-group-22.git

cd it2810-webutvikling-h17-prosjekt-4-group-22

npm install
```

``` bash
# Required environment variables
export P4_TMDB_KEY=<tmdb-api-key> # API key for TMDb.
export P4_AUTH_GOOGLE_KEY=<google-oath2-key>
export P4_AUTH_GOOGLE_SECRET=<google-oauth2-secret>
export P4_AUTH_FACEBOOK_KEY=<facebook-oauth2-key>
export P4_AUTH_FACEBOOK_SECRET=<facebook-oauth2-secret>

# These variables have default values, but can be overwritten.
export P4_PORT=<port> # Default = 8000, in production, change to 8084.
export P4_DATABASE_HOST=<databasae-host-ip> # Default = localhost
export P4_DATABASE-PORT=<database-port> # Default = 27017
export P4_DATABASE_NAME=<database-name> # Default = it2810-p4.

```

With that all set up, just start the project!

``` bash
docker-compose up serve

# Note that you may need `sudo` on some systems and configurations to use this command.
# To avoid this on a linux system, add your user to the Docker group with the following command.
# You need to log out and log in again for these changes to take effect.

sudo usermod -aG docker $USER
```

The project will then be available in your browser at `localhost:8000`!

## Setup with Angular-CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
