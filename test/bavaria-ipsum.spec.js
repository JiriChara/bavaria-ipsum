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

    describe('instance methods', function () {
        beforeEach(function () {
            this.bavariaIpsum = new this.BavariaIpsum();
        });

        describe('generateWord', function () {
            it('returns random word from source array', function () {
                spyOn(this.bavariaIpsum, '_getRandomInt').and.returnValue(10);

                expect(this.bavariaIpsum.generateWord()).toBe(
                    this.bavariaIpsum.source[10]
                );

                expect(this.bavariaIpsum._getRandomInt).toHaveBeenCalledWith(
                    0,
                    this.bavariaIpsum.source.length - 1
                );
            });
        });

        describe('generateSentence', function () {
            it('generates sentence', function () {
                expect(this.bavariaIpsum.generateSentence()).toBeString();
            });

            it('generates sentence of given length', function () {
                var i = 500;

                while (i-- > 0) {
                    expect(this.bavariaIpsum.generateSentence(1)).toMatch(
                        /^.+[.?!]$/i
                    );

                    expect(this.bavariaIpsum.generateSentence(2)).toMatch(
                        /^.+(\s|,)+.+[.?!]$/i
                    );
                }
            });

            it('starts with capitalized letter', function () {
                var i = 500,
                    firstLetter;

                while (i-- > 0) {
                    firstLetter = this.bavariaIpsum.generateSentence()[0];
                    expect(firstLetter).toEqual(
                        firstLetter.toUpperCase()
                    );
                }
            });

            it('ends with ? . or !', function () {
                var i = 500,
                    sentence,
                lastLetter;

                while (i-- > 0) {
                    sentence = this.bavariaIpsum.generateSentence();
                    lastLetter = sentence[sentence.length - 1];

                    expect(lastLetter).toMatch(
                        /^[?.!]$/
                    );
                }
            });

            it('adds comma', function () {
                this.bavariaIpsum.showCommaChance = 1; // 100%

                var i = 500;

                while (i-- > 0) {
                    expect(this.bavariaIpsum.generateSentence(2)).toMatch(
                        /^.+,\s.+[.?!]$/i
                    );

                    expect(
                        this.bavariaIpsum.generateSentence(2).indexOf(',') > 0
                    ).toBe(true);
                }
            });
        });

        describe('generateParagraph', function () {
            it('returns string', function () {
                expect(this.bavariaIpsum.generateParagraph()).toBeString();
            });

            it('generates given count of sentences', function () {
                var i = 500;

                while (i-- > 0) {
                    expect(this.bavariaIpsum.generateParagraph(1)).toMatch(
                        /^.+[.?!]$/
                    );

                    expect(this.bavariaIpsum.generateParagraph(2)).toMatch(
                        /^.+[.?!]\s.+[.?!]$/
                    );
                }
            });

            it('starts with startingSentence if option given', function () {
                var i = 500;

                while (i-- > 0) {
                    expect(this.bavariaIpsum.generateParagraph({
                        useStartingSentence: true
                    }).indexOf(this.bavariaIpsum.startSentence))
                        .toEqual(0);
                }
            });

            it('throws an error when length is invalid', function () {
                var self = this;

                expect(function () {
                    self.bavariaIpsum.generateParagraph('foo');
                }).toThrowError('Length must be an Integer');

                expect(function () {
                    self.bavariaIpsum.generateParagraph(5.5);
                }).toThrowError('Length must be an Integer');
            });

            it('throws an error when opts is invalid', function () {
                var self = this;

                expect(function () {
                    self.bavariaIpsum.generateParagraph(1, 1);
                }).toThrowError('Opts must be an Object');
            });
        });
    });
});
