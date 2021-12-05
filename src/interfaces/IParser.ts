/**
 * Interface IParser
 * Establishes that all classes that implement this interface must possess a function to parse a log
 */
export interface IParser {
    getFormat(): string[];
    getRegExp(): RegExp;
    getConditions(): object[];
    parseLog(input: string): string;
}