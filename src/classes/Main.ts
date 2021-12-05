/**
 * Main class
 * 
 */

import { FlagChecker } from "./FlagChecker"
import { EFlagNotFound } from '../exceptions/EFlagNotFound'
import { InputFile } from "./InputFile";
import { OutputFile } from "./OutputFile";
import { IFlagChecker } from './../interfaces/IFlagChecker';
import { EFileNotFound } from './../exceptions/EFileNotFound';
import { EFileAlreadyExists } from './../exceptions/EFileAlreadyExists';
import { IExiststFile } from './../interfaces/IExistsFile';
import { IOutputFile } from './../interfaces/IOutputFile';
import { IParser } from './../interfaces/IParser';
import { Parser } from './Parser';

export class Main {
    constructor(argv: string[]) {
        const OPTIONS = {
            input: {
                type: 'string'
            },
            output: {
                type: 'string'
            }
        };
        const INPUT = "input";
        const OUTPUT = "output";
        const TIMESTAMP = "timestamp";
        const LOGLEVEL = "logLevel";
        const TRANSACTIONID = "transactionId";
        const ERR = "err";
        const ERROR = "error";
        const conditions = [{
            key: LOGLEVEL,
            value: ERROR
        }];
        const REGEXP = /^(.*) - (.*) - (\{.*\})$/g;
        const FORMAT: string[] = [TIMESTAMP, LOGLEVEL, TRANSACTIONID, ERR];
        const flagChecker: IFlagChecker = new FlagChecker(argv, OPTIONS);
        this.checkFlag(flagChecker, INPUT);
        this.checkFlag(flagChecker, OUTPUT);
        const inputFileName: string = flagChecker.getFlag(INPUT);
        const outputFileName: string = flagChecker.getFlag(OUTPUT);
        const inputFile: InputFile = new InputFile(inputFileName);
        const outputFile: OutputFile  = new OutputFile(outputFileName);
        this.checkFileExistence(inputFile, true);
        this.checkFileExistence(outputFile, false);
        const parser: IParser = new Parser(conditions, REGEXP, FORMAT);
        inputFile.readLines(this.processLine(outputFile, parser));
    }

    /**
     * Function that throws an error if a flag doesn't exists
     * @returns void
     */
     private checkFlag(flagChecker: IFlagChecker, flag: string): void {
        if (!flagChecker.hasFlag(flag)) {
            throw new EFlagNotFound(flag);           
        }
    }

    /**
     * Function that checks if the name of the file exists
     * @param file - Instance of a file with existency check property
     * @param shouldExists - A flag that helps using the right condition dependening on the type of file
     * @returns void
     */
     private checkFileExistence(file: IExiststFile, shouldExists: boolean): void {
        if (shouldExists && !file.fileExists()) {
            throw new EFileNotFound(file.getName());
        }
        if (!shouldExists && file.fileExists()) {
            throw new EFileAlreadyExists (file.getName());
        }
    }

    /**
     * Function that process a line line
     * @param outputFile - instance of the output file
     * @param parser - instance of the parser that will decode the line
     * @param line - the line that was read (curried in a nested function)
     * @returns void
     */
     private processLine (outputFile: IOutputFile, parser: IParser): (line: string) => void {
        return function (line: string): void {
            const output: string = parser.parseLog(line);
            if (output) {
                outputFile.writeFile(output);
            }
        }
    }

}