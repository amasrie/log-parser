import { Parser } from './../classes/Parser';
import assert from 'assert';

describe('Parser', function() {
    const TIMESTAMP = "timestamp";
    const LOGLEVEL = "logLevel";
    const TRANSACTIONID = "transactionId";
    const ERR = "err";
    const SAMPLEID = "9abc55b2-807b-4361-9dbe-aa88b1b2e978";
    const CONDITIONS = [{
        key: TRANSACTIONID,
        value: SAMPLEID
    }, {
        key: "logLevel",
        value: "debug"
    }];
    const REGEXP = /^(.*) - (.*) - (\{.*\})$/g;
    const FORMAT: string[] = [TIMESTAMP, LOGLEVEL, TRANSACTIONID, ERR];
    const NOTMET = '2021-08-09T02:12:51.255Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is started"}';
    const NOMATCH = '2021-08-09T02:12:51.254Z - debug';
    const MATCH = '2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request user orders list","userId": 10}';
    const OUTPUT = '{"timestamp":1628475171254,"logLevel":"debug","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978"}';
    const parser = new Parser(CONDITIONS, REGEXP, FORMAT);

    it('getConditions', function() {
        const testConditions: any = parser.getConditions();
        assert.equal(testConditions[0].key, CONDITIONS[0].key);
        assert.equal(testConditions[0].value, CONDITIONS[0].value);
        assert.equal(testConditions[1].key, CONDITIONS[1].key);
        assert.equal(testConditions[1].value, CONDITIONS[1].value);
    });

    it('getFormat', function() {
        const testFormat = parser.getFormat();
        assert.equal(testFormat[0], FORMAT[0]);
        assert.equal(testFormat[1], FORMAT[1]);
        assert.equal(testFormat[2], FORMAT[2]);
        assert.equal(testFormat[3], FORMAT[3]);
    });

    it('getRegExp', function() {
        const testRegExp = parser.getRegExp();
        assert.equal(testRegExp, REGEXP);
    });

    it('parseLog - Conditions not met', function() {
        const testNotMet = parser.parseLog(NOTMET);
        assert.equal(testNotMet, "");
    });

    it('parseLog - No match', function() {
        const testNoMatch = parser.parseLog(NOMATCH);
        assert.equal(testNoMatch, "");
    });

    it('parseLog - Match', function() {
        const testMatch = parser.parseLog(MATCH);
        assert.equal(testMatch, OUTPUT);
    });
    
});
