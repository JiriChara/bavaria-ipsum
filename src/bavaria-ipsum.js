'use strict';

/**
 * The definition of BavariaIpsum class.
 */
var BavariaIpsum = function (opts) {
    opts = opts || {};

    /**
     * Array of "all" available bavarian words.
     */
    this.source = require('./source.json');

    /**
     * The default starting sentence.
     */
    this.startSentence = opts.startSentence || 'Bavaria ipsum dolor sit amet';

    /**
     * Min limit of words in one sentence.
     */
    this.minSentenceWords = opts.minSentenceWords || 2;

    /**
     * Max limit of words in one sentence.
     */
    this.maxSentenceWords = opts.maxSentenceWords || 20;

    /**
     * The chance to show comma after next word.
     */
    this.showCommaChance = opts.showCommaChance || 0.1;

    /**
     * Min limit of sentences in the paragraph.
     */
    this.minParagraphSentences = opts.minParagraphSentences || 2;

    /**
     * Max limit of sentences in the paragraph.
     */
    this.maxParagraphSentences = opts.maxParagraphSentences || 20;
};

BavariaIpsum.prototype = {
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
            this.minSentenceWords,
            this.maxSentenceWords
        );

        for (i = 0; i < length; ++i) {
            sentence += this.generateWord();
            sentence += this._shouldShowComma() ? ", " : " ";
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
            args = Array.prototype.slice.call(arguments),
            argsLen = args.length,
            i;

        if (argsLen === 0 || (argsLen === 1 && typeof length === 'object')) {
            length = this._getRandomInt(
                this.minParagraphSentences,
                this.maxParagraphSentences
            );

            opts = args[0] || {};
        } else if (args.length === 2) {
            opts = opts || {};
            opts.useStartingSentence = !!opts.useStartingSentence;
        } else if (args.length === 1) {
            opts = {
                useStartingSentence: false
            };
        } else {
            throw new Error(
                'Invalid arguments'
            );
        }

        this._validateParagraphLength(length);
        this._validateParagraphOptions(opts);

        if (opts.useStartingSentence === true) {
            sentences.push(this.startSentence);
            sentences[sentences.length - 1] += ' ';
            sentences[sentences.length - 1] += this.generateSentence();
            --length;
        }

        for (i = 0; i < length; ++i) {
            sentences.push(this.generateSentence());
        }

        return sentences.join(' ');
    },

    /**
     * Return `true` if comma should be shown after next word.
     */
    _shouldShowComma: function () {
        return Math.random() < this.showCommaChance ? true : false;
    },

    /**
     * Return random int between min and max.
     */
    _getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Validate paragraph length (must be an int)
     */
    _validateParagraphLength: function (length) {
        if (length % 1 === 0) {
            return true;
        }

        throw new Error(
            'Length must be an Integer'
        );
    },

    _validateParagraphOptions: function (opts) {
        if (typeof opts === 'object') {
            return true;
        }

        throw new Error(
            'Opts must be an Object'
        );
    }
};

module.exports = BavariaIpsum;
