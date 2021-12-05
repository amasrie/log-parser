/**
 * Parser class
 * Transforms a log into the desired format
 */
import moment from "moment";
import { IParser } from "../interfaces/IParser";

export class Parser implements IParser {
    private conditions: any;
    private format: string[];
    private regexp: RegExp;

    constructor(conditions: any, regexp: RegExp, format: string[]) {
        this.conditions = conditions;
        this.format = format;
        this.regexp = regexp;
    }

    /**
     * Function that returns the filter conditions
     * @returns object[]
     */
    public getConditions(): object[] {
        return this.conditions;
    }

    /**
     * Function that returns the decoder format
     * @returns string[]
     */
    public getFormat(): string[] {
        return this.format;
    }

    /**
     * Function that returns the regular expression pattern
     * @returns RegExp
     */
    public getRegExp(): RegExp {
        return this.regexp;
    }

    /**
     * Function to parse a log into a new format under the desired conditions
     * @param input - line to parse
     * @returns string
     */
    public parseLog(input: string): string {
        let output = "";
        this.regexp.lastIndex = 0;
        const matches: RegExpExecArray | null = this.regexp.exec(input);
        if (matches && matches.length > 3) {
            const json = JSON.parse(matches[3]);
            json.logLevel = matches[2];
            json.timestamp = moment.utc(matches[1]).valueOf();
            const parseJson: any = {};
            let check = true;
            for (const condition of this.conditions) {
                if ( json[condition.key] !== condition.value) {
                    check = false;
                    break;
                }
            }
            if (check) {
                for (const key of this.format) {
                    parseJson[key] = json[key];
                }
                output = JSON.stringify(parseJson);
            }
        }
        return output;
    }
}