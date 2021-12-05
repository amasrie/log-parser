# Log parser app

This application finds all the log messages with the level error of an input file and print them into an output file.

> Developed with Node.js version 14.18.1 and npm version 6.14.15
> 
> Download [Node.js](https://nodejs.org) or use a [Docker image](https://hub.docker.com/_/node)

## Execution

From the root of the project, execute the following commands:

```bash
    npm i
    npm run build
```

The first command will install all the required dependencies to execute the application. The second command will compile the contents of the `./src` folder and store the results into a new generated `./build` folder. If the folder already exists and there are changes in `./src`, it will update the contents of `./build`.

After that, the project can be executed with a command similar to the following one:

```bash
    node build/parser.js --input <inputFile> --output <outputFile>
```

> Where `<inputFile>` and `<outputFile>` correspond to paths to the input file and output file respectively.
>
> Please note that both `--input` and `--output` flags, as well as the file paths, must be indicated in order to properly execute the project.
> 
> Also, consider using an existing input file and a non existing output file, otherwise the project will throw errors. This measure was taken in order to avoid accidental file updates during execution.

During the execution, the lines of `<inputFile>` will be extracted, parsed and verified to be of `error` log level and, if the conditions are met, `<outputFile>` will be created and the accepted lines will be appended to it.

## Tests

### ESLint tests

ESLint is a tool that verifies the code for possible mistakes, throwing warnings or errors if something suspicious is found. To launch the linting tool on the source code, just execute the following command:

```bash
    npm run lint
```

### Unit tests

The unit tests can be found in the `./src/tests` folder. Type the following command to execute them:

```bash
    npm run test
```

## Documentation

This command will generate a `./docs` folder, that includes all the code documentation:

```bash
    npm run doc
```

## Project structure

```bash
    .
    ├── artifacts            #Additional or complementary files can be found here.
    |   ├── input.txt        #Sample of an input file.
    |   ├── output.txt       #Sample of an output file corresponding to input.txt.
    |   └── parser.png       #Class diagram of the project.
    ├── src                  #This folder contains the source code.
    |   ├── classes          #Contains abstract and concrete classes.
    |   ├── exceptions       #Custom Error class implementations.
    |   ├── interfaces       #Contains all the project interfaces.
    |   ├── tests            #All the unit tests are here.
    |   └── parser.ts        #This file is the starting point of the application.
    ├── .eslintignore        #Includes the list of elements that ESLint must ignore.
    ├── .eslintrc            #ESLint configuration file.
    ├── package.json         #Lists all the installed dependencies.
    ├── README.md            #This document.
    └── tsconfig.json        #Especifies compiler options in order to execute the projeect.
```

## Author

[Abdalah Masrie](abdalahmasrie@gmail.com)
