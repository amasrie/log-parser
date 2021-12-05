/**
 * Exception when a flag is not found
 */
export class EFlagNotFound extends Error {
    constructor(name: string) {
        super(`Flag not found or empty: ${name}`);
    }
}