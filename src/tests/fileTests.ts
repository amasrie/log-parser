import { OutputFile } from './../classes/OutputFile';
import { InputFile } from './../classes/InputFile';
import assert from 'assert';

describe('AFileChecker', function() {
    const INPUTFILENAME = "aFileThat.hopefullyDoesNotExists";
    const OUTPUTFILENAME = "package.json";
    const inputFile = new InputFile(INPUTFILENAME);
    const outputFile = new OutputFile(OUTPUTFILENAME);

    it('getName', function() {
        const getName = inputFile.getName();
        assert.equal(getName, INPUTFILENAME);
    });

    it('fileExists - Not found', function() {
        const fileNotfound = inputFile.fileExists();
        assert.equal(fileNotfound, false);
    });

    it('fileExists - Found', function() {
        const fileFound = outputFile.fileExists();
        assert.equal(fileFound, true);
    });
});
