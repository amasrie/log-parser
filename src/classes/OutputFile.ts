/**
 * OutputFile class
 * Contains operations regarding output files
 */

import { IOutputFile } from "../interfaces/IOutputFile";
import { AFileChecker } from "./AFileChecker";
import { createWriteStream, WriteStream } from 'fs';

export class OutputFile extends AFileChecker implements IOutputFile {

    constructor(name: string) {
        super(name);
     }

    /**
     * Function to write a new text into a file
     * @param line - a text that will be added to the file
     * @returns void
     */
     public writeFile(line: string): void {
        const writeStream: WriteStream = createWriteStream(this.name, {flags: 'a'});
        writeStream.write(`${line}\n`);
        writeStream.close();
    }

 }