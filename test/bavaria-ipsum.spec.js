'use strict';

describe('BavariaIpsum', function () {
    beforeEach(function () {
        this.BavariaIpsum = require('../src/bavaria-ipsum');
    });

    describe('constructor', function () {
        describe('no options given', function () {
            beforeEach(function () {
                this.bavariaIpsum = new this.BavariaIpsum();
            });

            it('initializes source to array of words', function () {
                expect(this.bavariaIpsum.source).toBeArrayOfStrings();
            });

            it('initializes startSentence', function () {
                expect(this.bavariaIpsum.startSentence).toBe(
                    'Bavaria ipsum dolor sit amet'
                );
            });

            it('initializes minSentenceWords', function () {
                expect(this.bavariaIpsum.minSentenceWords).toBe(2);
            });

            it('initializes maxSentenceWords', function () {
                expect(this.bavariaIpsum.maxSentenceWords).toBe(20);
            });

            it('initializes showCommaChance', function () {
                expect(this.bavariaIpsum.showCommaChance).toBe(0.1);
            });

            it('initializes minParagraphSentences', function () {
                expect(this.bavariaIpsum.minParagraphSentences).toBe(2);
            });

            it('initializes minParagraphSentences', function () {
                expect(this.bavariaIpsum.maxParagraphSentences).toBe(20);
            });
        });

        describe('options given', function () {
            beforeEach(function () {
                this.bavariaIpsum = new this.BavariaIpsum({
                    startSentence: 'foo',
                    minSentenceWords: 1,
                    maxSentenceWords: 2,
                    showCommaChance: 0.01,
                    minParagraphSentences: 3,
                    maxParagraphSentences: 4
                });
            });

            it('initializes startSentence', function () {
                expect(this.bavariaIpsum.startSentence).toBe(
                    'foo'
                );
            });

            it('initializes minSentenceWords', function () {
                expect(this.bavariaIpsum.minSentenceWords).toBe(1);
            });

            it('initializes maxSentenceWords', function () {
                expect(this.bavariaIpsum.maxSentenceWords).toBe(2);
            });

            it('initializes showCommaChance', function () {
                expect(this.bavariaIpsum.showCommaChance).toBe(0.01);
            });

            it('initializes minParagraphSentences', function () {
                expect(this.bavariaIpsum.minParagraphSentences).toBe(3);
            });

            it('initializes minParagraphSentences', function () {
                expect(this.bavariaIpsum.maxParagraphSentences).toBe(4);
            });
        });
    });

    describe('generateWord method', function () {
        beforeEach(function () {
            this.bavariaIpsum = new this.BavariaIpsum();
        });

        it('returns random word from source array', function () {
            spyOn(this.bavariaIpsum, '_getRandomInt').and.returnValue(10);

            expect(this.bavariaIpsum.generateWord()).toBe(
                this.bavariaIpsum.source[10]
            );

            expect(this.bavariaIpsum._getRandomInt).toHaveBeenCalledWith(
                0,
                this.bavariaIpsum.source.length
            );
        });
    });
});
