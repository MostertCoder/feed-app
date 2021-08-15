const path = require('path');
const expect = require('chai').expect;

const getFileLines = require('../functions/getFileLines');

let result = [];

describe('Get File Lines', () => {
    before(async () => {
        result = await getFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test.txt'));
    });

    it('should return an array', () => {
        expect(result).to.be.a('array');
    });

    it('should equal ["line 1", "line 2", "line 3"]', () => {
        expect(result).to.deep.equal([
            'line 1',
            'line 2',
            'line 3'
        ]);
    });

    it('should throw an error', async () => {
        try {
            await getFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test-empty.txt'));
        } catch (error) {
            expect(error).to.be.an('error');
        }
    });
});