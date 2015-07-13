/**
 * The definition of BavariaIpsum class.
 */
var BavariaIpsum = function () {
    /**
     * Array of "all" available bavarian words.
     */
    this.source = require('./source.json');

    /**
     * The default starting sentence.
     */
    this.START_SENTENCE = 'Bavaria ipsum dolor sit amet';

    /**
     * Min limit of words in one sentence.
     */
    this.MIN_SENTENCE_WORDS = 2;

    /**
     * Max limit of words in one sentence.
     */
    this.MAX_SENTENCE_WORDS = 20;

    /**
     * The chance to show comma after next word.
     */
    this.SHOW_COMMA_CHANCE = 0.1;

    /**
     * Min limit of sentences in the paragraph.
     */
    this.MIN_PARAGRAPH_SENTENCES = 2;

    /**
     * Max limit of sentences in the paragraph.
     */
    this.MAX_PARAGRAPH_SENTENCES = 20;
};

BavariaIpsum.prototype = {
    /**
     * Return random int between min and max.
     */
    _getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Return random Bavarian word.
     */
    generateWord: function () {
        return this.source[
            this._getRandomInt(0, this.source.length)
        ];
    },

    /**
     * Generate random Bavarian sentence.
     */
    generateSentence: function (length) {
        var sentence = "",
            i;

        length = length || this._getRandomInt(
            this.MIN_SENTENCE_WORDS,
            this.MAX_SENTENCE_WORDS
        );

        for (i = 0; i < length; i ++) {
            sentence += this.generateWord();
            sentence += this.shouldShowComma() ? ", " : " ";
        }

        sentence = sentence.replace(/,?\s*$/, '');
        sentence += (new RegExp("[\?!\.]$")).test(sentence) ? '' : '.';

        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    },

    /**
     * Generate paragraph
     */
    generateParagraph: function (length, opts) {
        var sentences = [],
            args = Array.prototype.slice.call(arguments);

        if (
            args.length === 0 ||
            (args.length === 1 && typeof length == 'object')
        ) {
            length = this._getRandomInt(
                this.MIN_PARAGRAPH_SENTENCES,
                this.MAX_PARAGRAPH_SENTENCES
            );

            opts = args[0];
        } else if (args.length === 2) {
            opts.useStartingSentence = !!opts.useStartingSentence;
        } else if (args.length === 1) {
        } else {
            throw new Error(
                'Invalid arguments'
            );
        }

        opts = opts || {};

        if (opts.useStartingSentence === true) {
            sentences.push(this.START_SENTENCE);
            sentences[sentences.length - 1] += ' ';
            sentences[sentences.length - 1] += this.generateSentence();
            --length;
        }

        for (i = 0; i < length; i++) {
            sentences.push(this.generateSentence());
        }

        return sentences.join(' ');
    },

    /**
     * Return `true` if comma should be shown after next word.
     */
    shouldShowComma: function () {
        return Math.random() < this.SHOW_COMMA_CHANCE ? true : false;
    }
};

module.exports = new BavariaIpsum();
