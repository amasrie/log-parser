/**
 * FlagChecker class
 * Verifies the send flags when executioning the program
 */
import { IFlagChecker } from "../interfaces/IFlagChecker";
import yargs from 'yargs/yargs';

export class FlagChecker implements IFlagChecker {
    private args: any;

    constructor(args: string[], options: any) {
        this.args = yargs(args).options(options).argv;
    }

    /**
     * Function that verifies if a flag exists and has value
     * @param flag - name of the flag to check
     * @returns boolean
     */
     public hasFlag(flag: string): boolean {
        return !!this.args[flag];
    }

    /**
     * Function that obtains the associated value to a flag
     * @param flag - name of the flag to obtain
     * @returns string
     */
     public getFlag(flag: string): string {
        return this.args[flag];
    }

}