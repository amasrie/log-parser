/**
 * InputFile class
 * Contains operations regarding input files
 */

import { createReadStream, ReadStream } from 'fs';
import { createInterface } from 'readline';
import { IInputFile } from "../interfaces/IInputFile";
import { AFileChecker } from "./AFileChecker";

export class InputFile extends AFileChecker implements IInputFile {

    constructor(name: string) {
       super(name);
    }

    /**
     * Asynchronous function that retrieves every line of a file and send it to another function
     * @param fn - a function that executes for each line
     * @returns Promise<void>
     */
     public async readLines(fn: any): Promise<void> {
        const readStream: ReadStream = createReadStream(this.name);
        const lineReader = createInterface({
            input: readStream,
            crlfDelay: Infinity
        });
        for await (const line of lineReader) {
            fn(line);
        }
    }

 }