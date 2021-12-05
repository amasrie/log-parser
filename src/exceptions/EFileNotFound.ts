/**
 * Exception when a file is not found
 */
export class EFileNotFound extends Error {
    constructor(name: string) {
        super(`File not found: ${name}`);
    }
}