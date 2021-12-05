/**
 * Exception when a file that was supposed to be new already exists
 */
export class EFileAlreadyExists extends Error {
    constructor(name: string) {
        super(`File already exists: ${name}`);
    }
}