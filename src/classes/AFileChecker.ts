/**
 * AFileChecker class
 * Abstract class that checks file existance
 */

import { existsSync } from 'fs';
import { IExiststFile } from "../interfaces/IExistsFile";

export abstract class AFileChecker implements IExiststFile {
    protected name: string;

    constructor(name: string) {
        this.name = name
    }

    /**
     * Function that checks if the name of the file exists
     * @returns boolean
     */
    public fileExists(): boolean {
        return existsSync(this.name)
    }

    /**
     * Function that get the name ofthe file
     * @returns string
     */
     public getName(): string {
        return this.name;
    }
}