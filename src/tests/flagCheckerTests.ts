import { FlagChecker } from './../classes/FlagChecker';
import assert from 'assert';

describe('FlagChecker', function() {
    const VAL1 = "--input";
    const VAL2 = "input.txt";
    const VAL3 = "--output";
    const FLAG1 = "input";
    const FLAG2 = "output";
    const FLAG3 = "format";
    const ARGS = [VAL1, VAL2, VAL3];
    const OPTIONS = {
        input: {
            type: 'string'
        },
        output: {
            type: 'string'
        }
    };
    const flagChecker: FlagChecker = new FlagChecker(ARGS, OPTIONS);

    it('getFlag - Existing flag with a value', function() {
        const GFLAGWV = flagChecker.getFlag(FLAG1);
        assert.equal(GFLAGWV, VAL2);
    });

    it('getFlag - Existing flag without a value', function() {
        const GFLAGWOV = flagChecker.getFlag(FLAG2);
        assert.equal(GFLAGWOV, "");
    });

    it('getFlag - Non existing flag', function() {
        const GFLAGNEF = flagChecker.getFlag(FLAG3);
        assert.equal(GFLAGNEF, undefined);
    });

    it('hasFlag - Existing flag with value', function() {
        const HFLAGWV = flagChecker.hasFlag(FLAG1);
        assert.equal(HFLAGWV, true);
    });

    it('hasFlag - Existing flag without value', function() {
        const HFLAGWOV = flagChecker.hasFlag(FLAG2);
        assert.equal(HFLAGWOV, false);
    });

    it('hasFlag - Non existing flag', function() {
        const HFLAGNEF = flagChecker.hasFlag(FLAG3);
        assert.equal(HFLAGNEF, false);
    });
});
