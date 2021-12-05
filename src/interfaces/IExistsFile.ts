/**
 * Interface IExiststFile
 * Checks file existance
 */
 import { IGetName } from './IGetName';
 
 export interface IExiststFile extends IGetName {
    fileExists(): boolean;
}