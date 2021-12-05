/**
 * Interface IFlagChecker
 * Establishes that all classes that implement this interface must possess a function to verify the existance of a flag
 */
export interface IFlagChecker {
    hasFlag(flag: string): boolean;
    getFlag(flag: string): string;
}