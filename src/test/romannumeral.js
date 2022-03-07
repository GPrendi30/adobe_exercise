const { assert, expect } = require('chai');

describe('decimalToRoman: converting decimal numbers to romannumerals', () => {
    
    it('calling with no parameters should fail', (done) => {
        expect(() => decimalToRoman()).to.throw('Should be called with a parameter');
        done();
    })

    it('calling with a parameter that is not a number should fail', (done) => {
        expect(() => decimalToRoman("notANumber")).to.throw('Only numbers can be converted');
        expect(() => decimalToRoman([])).to.throw('Only numbers can be converted');
        expect(() => decimalToRoman({})).to.throw('Only numbers can be converted');
        done();
    })

    it('calling with a parameter that is a number but outside of range 1 - 255 should fail', (done) => {
        expect(() => decimalToRoman(0)).to.throw('Only positive numbers between 1 and 255 can be converted');
        expect(() => decimalToRoman(256)).to.throw('Only positive numbers between 1 and 255 can be converted');

        done();
    })

    describe('calling with a paremeter that is a number inside the range 1 - 255', () => {
        
        it('decimalToRoman(1) should return I', (done) => {
            expect(decimalToRoman(1)).to.equal('I');

            done();
        })

        it('decimalToRoman(5) should return V', (done) => {
            expect(decimalToRoman(5)).to.equal('V');
            done();
        })

        it('decimalToRoman(10) should return X', (done) => {
            expect(decimalToRoman(10)).to.equal('X');

            done();
        })

        it('decimalToRoman(50) should return L', (done) => {
            expect(decimalToRoman(50)).to.equal('L');

            done();
        })

        it('decimalToRoman(100) should return C', (done) => {
            expect(decimalToRoman(100)).to.equal('C');

            done();
        })

        it('decimalToRoman(255) should return CCLV', (done) => {
            expect(decimalToRoman(255)).to.equal('CCLV');

            done();
        })
    })

    
});