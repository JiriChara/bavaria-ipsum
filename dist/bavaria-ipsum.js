(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.BavariaIpsum = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./source.json":2}],2:[function(require,module,exports){
module.exports=[
    "A",
    "Aasgem",
    "Abfieseln",
    "Almrausch",
    "An",
    "Au",
    "Auf",
    "Auffisteign",
    "Baamwach",
    "Back",
    "Bavariae",
    "Bayer",
    "Beidl",
    "Berg",
    "Bia",
    "Biagadn",
    "Biakriagal",
    "Biaschlegl",
    "Biawambn",
    "Biazelt",
    "Bitt",
    "Bladl",
    "Blosmusi",
    "Bradwurschtsemmal",
    "Breihaus",
    "Brezn",
    "Broadwurschtbudn",
    "Brodzeid",
    "Brotzeit",
    "Bua",
    "Buachbinda",
    "Buam",
    "Bussal",
    "Charivari",
    "Damischa",
    "Deandl",
    "Deandlgwand",
    "Des",
    "Di",
    "Diandldrahn",
    "Do",
    "Dog",
    "Edlweiss",
    "Engelgwand",
    "Enzian",
    "Ewig",
    "Fensdaln",
    "Fingahaggln",
    "Foidweg",
    "Freibia",
    "Fünferl",
    "Gams",
    "Gamsbart",
    "Gar",
    "Gaudi",
    "Gelbe",
    "Giasinga",
    "Gidarn",
    "Gipfe",
    "Gmiadlichkeit",
    "Goaßmaß",
    "God",
    "Godds",
    "Gott",
    "Graudwiggal",
    "Greaßt",
    "Greichats",
    "Griasd",
    "Griasnoggalsubbm",
    "Gscheckate",
    "Gschicht",
    "Gschmeidig",
    "Gstanzl",
    "Guglhupf",
    "Gwiass",
    "Habedehre",
    "Haberertanz",
    "Haferl",
    "Hawadere",
    "Heimatland",
    "Heiwog",
    "Hemad",
    "Hendl",
    "Hetschapfah",
    "Hi",
    "Hoam",
    "Hob",
    "Hoiwe",
    "I",
    "Im",
    "In",
    "Jodler",
    "Kaiwe",
    "Kimmt",
    "Kini",
    "Kirwa",
    "Klampfn",
    "Kneedl",
    "Koa",
    "Kuaschwanz",
    "Landla",
    "Ledahosn",
    "Leit",
    "Lem",
    "Leonhardifahrt",
    "Lewakaas",
    "Luja",
    "Ma",
    "Maderln",
    "Maibam",
    "Mamalad",
    "Marei",
    "Marterl",
    "Maß",
    "Maßkruag",
    "Mehra",
    "Meidromml",
    "Mim",
    "Mongdratzal",
    "Mordsgaudi",
    "Musi",
    "Namidog",
    "Nia",
    "Nimma",
    "Nix",
    "Oachkatzlschwoaf",
    "Obandeln",
    "Obandln",
    "Obazda",
    "Ohrwaschl",
    "Oim",
    "Prosd",
    "Prosit",
    "Radi",
    "Radl",
    "Radler",
    "Ramasuri",
    "Reiwadatschi",
    "Resi",
    "Rüam",
    "Samma",
    "Sauakraud",
    "Sauwedda",
    "Schaung",
    "Schbozal",
    "Schdarmbeaga",
    "Schdeckalfisch",
    "Schellnsau",
    "Schichtl",
    "Schmankal",
    "Schmarn",
    "Schnacksln",
    "Schneid",
    "Schorsch",
    "Schuabladdla",
    "Schwoanshaxn",
    "See",
    "Sei",
    "Semmlkneedl",
    "Sepp",
    "Servas",
    "Singan",
    "So",
    "Sodala",
    "Sog",
    "Sonn",
    "Spezi",
    "Spotzerl",
    "Spuiratz",
    "Steckerleis",
    "Stubn",
    "Suri",
    "Sünd",
    "Tag",
    "Trachtnhuat",
    "Umma",
    "Vergeltsgott",
    "Wanninger",
    "Watschnbaam",
    "Watschnpladdla",
    "Wea",
    "Weibaleid",
    "Weiznglasl",
    "Weißwiaschd",
    "Wia",
    "Wiesn",
    "Woibbadinga",
    "Wolpern",
    "Wos",
    "Wuascht",
    "Wurscht",
    "Wurschtsolod",
    "Xaver",
    "Zidern",
    "Zwedschgndadschi",
    "a",
    "aa",
    "aasgem",
    "aba",
    "abfieseln",
    "acht'n",
    "af",
    "allerweil",
    "am",
    "amoi",
    "an",
    "anbandeln",
    "aso",
    "auf",
    "auf'd",
    "auf'n",
    "auffi",
    "ausgähd",
    "auszutzeln",
    "aweng",
    "baamwach",
    "back",
    "baddscher",
    "barfuaßat",
    "basd",
    "beim",
    "beinand",
    "biawambn",
    "biazelt",
    "bin",
    "bissal",
    "bitt",
    "bittschön",
    "bloß",
    "blärrd",
    "boarischer",
    "bravs",
    "brodzeid",
    "brotzeit",
    "bussal",
    "charivari",
    "d'",
    "da",
    "daad",
    "dadst",
    "dahoam",
    "damischa",
    "daugn",
    "de",
    "dea",
    "deandlgwand",
    "ded",
    "dee",
    "dei",
    "denn",
    "der",
    "des",
    "di",
    "dijidiholleri",
    "do",
    "drei",
    "dringma",
    "du",
    "eam",
    "eana",
    "ebba",
    "eich",
    "enzian",
    "es",
    "etza",
    "ewig",
    "fei",
    "fensdaln",
    "fescha",
    "fias",
    "foahn",
    "freibia",
    "fui",
    "g'hupft",
    "gamsbart",
    "ganze",
    "gar",
    "gaudi",
    "gean",
    "geh",
    "gehd",
    "gehds",
    "gelbe",
    "gfoids",
    "gfreit",
    "ghupft",
    "gibt's",
    "glacht",
    "glei",
    "gmahde",
    "goaßmaß",
    "gor",
    "graudwiggal",
    "greana",
    "greaßt",
    "griagd",
    "griasd",
    "griaß",
    "großherzig",
    "gscheckate",
    "gscheid",
    "gscheit",
    "gschicht",
    "gschmeidig",
    "gsprunga",
    "gsuffa",
    "guad",
    "gwihss",
    "gwiss",
    "hab",
    "haferl",
    "hallelujah",
    "ham",
    "hawadere",
    "hea",
    "heid",
    "heitzdog",
    "helfgod",
    "hemad",
    "hera",
    "hetschapfah",
    "hi",
    "hinter'm",
    "hoam",
    "hob",
    "hod",
    "hog",
    "hogg",
    "hoggd",
    "hoid",
    "huift",
    "i",
    "iabaroi",
    "im",
    "imma",
    "in",
    "is",
    "ja",
    "jedza",
    "jo",
    "kenna",
    "kimmt",
    "kloan",
    "ko",
    "koa",
    "kost",
    "kuaschwanz",
    "kumm",
    "kummd",
    "kummt",
    "landla",
    "leck",
    "ledahosn",
    "legst",
    "lem",
    "liab",
    "liabs",
    "liberalitas",
    "lossn",
    "luja",
    "lustiga",
    "ma",
    "maibam",
    "marei",
    "marterl",
    "mas",
    "maßkruag",
    "measi",
    "mechad",
    "mehra",
    "mei",
    "meidromml",
    "mi",
    "midanand",
    "midananda",
    "middn",
    "midnand",
    "mim",
    "moan",
    "moand",
    "mog",
    "mogsd",
    "muas",
    "muass",
    "naa",
    "nacha",
    "nachad",
    "nackata",
    "narrisch",
    "ned",
    "need",
    "nei",
    "nia",
    "nieda",
    "nimma",
    "nimmds",
    "nix",
    "no",
    "noch",
    "nois",
    "nomoi",
    "o'ha",
    "oa",
    "oamoi",
    "oans",
    "oba",
    "obacht",
    "obandeln",
    "obandln",
    "ognudelt",
    "oiwei",
    "ollaweil",
    "om",
    "owe",
    "ozapfa",
    "pfenningguat",
    "pfiad",
    "pfundig",
    "prosd",
    "radi",
    "radler",
    "red",
    "resch",
    "sagrisch",
    "samma",
    "sammawiedaguad",
    "san",
    "sauakraud",
    "sauba",
    "sauwedda",
    "schaugn",
    "schdarmbeaga",
    "scheans",
    "schee",
    "schnacksln",
    "scho",
    "schoo",
    "schorsch",
    "schuabladdla",
    "schuf",
    "schüds",
    "sei",
    "sepp",
    "singan",
    "singd",
    "so",
    "sodala",
    "sog",
    "soi",
    "soweid",
    "sowos",
    "spernzaln",
    "spezi",
    "spotzerl",
    "trihöleridi",
    "um",
    "umananda",
    "umma",
    "unbandig",
    "und",
    "uns",
    "vasteh",
    "vo",
    "von",
    "vui",
    "waar",
    "wann",
    "wea",
    "weibaleid",
    "weida",
    "wia",
    "wiad",
    "wiavui",
    "wirds",
    "wo",
    "woar",
    "woass",
    "woaß",
    "wolln",
    "wolpern",
    "wos",
    "woschechta",
    "wui",
    "wuid",
    "wujn",
    "wurschtsolod",
    "z'dringa",
    "zamm",
    "zua",
    "zwoa",
    "zünftig"
]

},{}]},{},[1])(1)
});