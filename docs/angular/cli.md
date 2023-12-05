--- 
title: Angular CLI 
sidebar_position: 2
slug: /category/angular/cli
--- 

# Angular CLI Cheat Sheet

Angular CLI (ng) is a command-line interface for Angular. It allows you to create, build, test, and run Angular applications from the command line. Let's dive into the essential aspects of Angular CLI for programmers.



## Installing 

To install the Angular CLI, run the following command:

```bash
npm install -g @angular/cli
```

## Creating a New Project

To create a new Angular project, run the following command:

```bash
ng new my-app
```

This will create a new Angular project named `my-app` in the current directory. You can also specify the directory name as follows:

```bash
ng new my-app --directory my-dir
```

## Generating Components

To generate a new component, run the following command:

```bash
ng generate component my-component
```

This will create a new component named `my-component` in the `src/app` directory. You can also specify the directory name as follows:

```bash
ng generate component my-component --directory my-dir
```

## Updating Angular

To update Angular in an existing project, run the following command:

```bash
ng update @angular/cli @angular/core
```




## Updating Angular CLI

To update the Angular CLI, run the following command:

```bash
npm install -g @angular/cli@latest
```

## Running the Application

To run the application, run the following command:

```bash
ng serve
```

This will start the application on port `4200`. You can also specify the port number as follows:

```bash
ng serve --port 3000
```

## Building the Application

To build the application, run the following command:

```bash
ng build
```



## Testing the Application

To test the application, run the following command:

```bash
ng test
```

This will run all the tests in the `src/app` directory. 


## Debugging the Application

To debug the application, run the following command:

```bash
ng serve --inspect
```

This will start the application in debug mode. You can then attach a debugger to the application.


