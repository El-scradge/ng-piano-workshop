# PianoWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Project outline,

The Piano workshop site is being developed as a way for the team to edit and update content for the website,

The API utilises a firebase database hooked to an in progress dynamic api endpoint selector which is selected from the 'type' in the data object.

Data opjects are a simplified JSON-API transformed to work in the firebase format. (saving edited versions still in progress)

## To do

uploading of images.. (standard base 64 encoding should work if i want to store them in the database)
News feed on the front end.
Authentication for users based on firebase users area
Edit mode, so that all editing functions are turned off unless logged in.
Responsive mode, and mobile only menu. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
