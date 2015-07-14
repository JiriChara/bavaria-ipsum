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
    this.maxParagraphSentences = opts.maxParagraphSentences || 2;
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
    "a",
    "ā",
    "a gä",
    "Abbodeggn",
    "aggurad",
    "Aibrenn",
    "Aigschnabbda",
    "Aimeàggal",
    "aine",
    "Aisschiàssn",
    "aizipfen",
    "Apfekiachal",
    "aso",
    "aufdrād",
    "auffe",
    "auf'd Wäid kumma",
    "auf's Mai",
    "aufmandln",
    "aufmischn",
    "aufschbuin",
    "aufschdäin",
    "ausgschamd",
    "ausse",
    "Auszongne",
    "awo",
    "babba",
    "Babba",
    "Babbadegl",
    "Babbn",
    "bacha",
    "Bachofa",
    "Badärr",
    "Baddrie",
    "Baggal",
    "Bām",
    "Bāmbisla",
    "Bauanfimfa",
    "Baz",
    "bazn",
    "Bàzal",
    "kleines Stück",
    "Baze",
    "Bäfflamott",
    "bärig",
    "Bāda",
    "benzn",
    "Bià",
    "Biàdimpfe",
    "Biàfuizl",
    "Biagling",
    "Biàgriàgl",
    "Biàweàma",
    "Bichl, Bichi",
    "Bileddl",
    "Bisguàggn",
    "bisln",
    "Biwal",
    "Bixn",
    "Blafon",
    "Blaugraud",
    "Rotkohl",
    "bläd",
    "blädgsuffa",
    "blädln",
    "Bleàme",
    "Bleàmeschdōg",
    "Blembe",
    "Bleschl",
    "Boàndl",
    "Boàndlgrama",
    "Boàzn",
    "Bodschambal",
    "Bōdal fan",
    "Bōg",
    "Bōgfozn",
    "Braigaul",
    "Brauereipferd",
    "Braiss",
    "Brennsubbn",
    "Brezn",
    "Brezngnedl",
    "Breznsoiza",
    "brogga",
    "Brōdzaid",
    "Vesper",
    "Bruin",
    "bsuffa",
    "Bua",
    "Buàzlbām",
    "Buddā",
    "Bugl",
    "Buidl",
    "Busse, Bussal",
    "bussln",
    "Buzal",
    "Buzi",
    "d'Beàg",
    "da",
    "da Gloà",
    "da Kini",
    "dabräsln",
    "daffa",
    "dāmalang",
    "Dampf",
    "Däbb",
    "däbbad",
    "daessn",
    "dafaid",
    "damisch",
    "Dampfnui",
    "dantschig",
    "darenna",
    "dawuzln",
    "Dāndla",
    "Debfal",
    "Deàndl",
    "Dellaflaisch",
    "diàf",
    "Diàndl",
    "Diàn",
    "Diàl",
    "Dibbfalschaissa",
    "Diddn",
    "Diredare",
    "Dizl",
    "do",
    "Doag",
    "Dōg",
    "Dōdschn",
    "dōrad",
    "Draibauf",
    "Drazn",
    "drāmhabbad",
    "Drāwuàm",
    "Draiquadlbrivatie",
    "Drebbm",
    "Dreg",
    "dreggad",
    "Dreghamme",
    "Dreglagga",
    "dribbsdrui",
    "Driedschler",
    "Drum",
    "Dschambsdara",
    "Duàschd",
    "Duddln",
    "Duin",
    "Duit",
    "Dusl",
    "Eàdäpfe",
    "Eàdog",
    "Edāsch",
    "Emsn",
    "ez, ezad",
    "fagäids Gōd",
    "Fàgge",
    "fai",
    "Fangamandl",
    "faregga",
    "fareggd",
    "faruàfa",
    "Fedafuxa",
    "fesch",
    "Fetznrausch",
    "Fingagfui",
    "Fingahaggen",
    "fire",
    "Fleischpfanzl",
    "Fleischpfanzlsemme",
    "Flōsfan",
    "foigfresn",
    "Fozn",
    "Foznschbangla",
    "Föhn",
    "Fōda",
    "Fraibialädschn",
    "Frasä",
    "Friedhofsjodla",
    "froàsln",
    "Fuchzga",
    "Fuizl",
    "gäi?",
    "Gäiberuam",
    "Gamsbaat",
    "gamsig",
    "Gaudi",
    "gāch",
    "Geàm",
    "Geàmgnedl",
    "Geàstl",
    "Gfries",
    "Gfui",
    "Gleggal",
    "Glezn",
    "Gleznbrod",
    "Globiàschdn",
    "Glubbal",
    "Glump",
    "Gmiàs",
    "Gnedl",
    "Gniabisla",
    "Gnofe",
    "Goàsnmaß",
    "Gschbusi",
    "Gschweal",
    "grawen",
    "grachad",
    "Grachal",
    "Graffe",
    "graislig",
    "grantig",
    "Graxn",
    "graxln",
    "Grem",
    "griàbig",
    "Griàs de!",
    "Griàs Gōd!",
    "Grischbal",
    "Grosskopfada",
    "Gsäichds",
    "gschaid",
    "gschammig",
    "gscheàd",
    "Gschbusi",
    "gschdandn",
    "gschdingad",
    "Gschdingada",
    "gschmaidig",
    "Gschnezlds",
    "Gschwoischädl",
    "Guàdl",
    "Guglhupf",
    "Guggurutz",
    "Gummiadla",
    "Gummignedl",
    "Gwaichts",
    "gwambad",
    "Gwand",
    "Hagglschdegga",
    "Hawediäre!",
    "Haigäing",
    "Häis",
    "Haisl",
    "Haumdaucha",
    "Haxn",
    "Heàndl",
    "Hendl",
    "Hendlfriedhof",
    "hi",
    "Hiàsch",
    "Himmefadda",
    "Hoà",
    "hoàglig",
    "Hoàgloàra",
    "Hoàmad",
    "Hodalump",
    "hogga",
    "Hoggableiba",
    "Hoiwe",
    "Hoiz foà da Hiddn",
    "Hollakiàche",
    "Hōfa",
    "Hōsnboidal",
    "Huàd",
    "Hund",
    "Hundsbuà",
    "Hundsgfeglde",
    "Hundsgribbe",
    "Hutzlbrià",
    "i",
    "ibaroi",
    "inkommodian",
    "Iwo!",
    "Jagadä",
    "Janka",
    "Joà",
    "jodeln",
    "Kadoffegnedl",
    "Kadoffesolod",
    "Kafä",
    "Kambbe",
    "Kās",
    "Kāsfiàs",
    "Kāskuacha",
    "Kāsloàwe",
    "Kāsschbozn",
    "Keàndlgfuàdada",
    "Keáwe, Keáwal",
    "Kich",
    "Kinskopf",
    "Kipf",
    "Kipfal",
    "Kirda",
    "Kiwe",
    "Koda",
    "Koiraweabostl",
    "Kraiddawaiwe",
    "Kraizbiàmbāmhollastaun",
    "Kraizdaifi",
    "Kraudwiggal",
    "Kribbe",
    "kruzidiaggn",
    "Kuáze",
    "Kuchl",
    "lagg",
    "Lagga",
    "Laggl, gscheàda",
    "Lambbe",
    "lāre Hōsn",
    "Lädschn",
    "Lädschnbäbbi",
    "Lenz",
    "Leffe",
    "Lewagnedl",
    "Lewakās",
    "Lewakāssemme",
    "Lifdlmolarai",
    "Loàwe",
    "Loàwedoàg",
    "Lōn",
    "Mai",
    "Maibām",
    "Mäibabb",
    "Mandal",
    "Mannalaid",
    "Mansbuid",
    "Manschgal",
    "Maruin",
    "Masl",
    "Mass",
    "Massgruàgschdemma",
    "mià",
    "miàd",
    "Millibiddschn",
    "Minga",
    "miserablig",
    "moàdsdrum",
    "Mongdrazal",
    "Mongschoàs",
    "Mō",
    "Mōsbummal",
    "Mugga",
    "Muichkaramäin",
    "nachad",
    "Nammdōg",
    "narisch",
    "Näga",
    "Nägaschwoàs",
    "nā",
    "nai",
    "naus",
    "neàmde, neàmand",
    "niedaleng",
    "nix",
    "Nosnramme",
    "Noàgal",
    "Noàgalzuzla",
    "Noàgalexbress",
    "Noggal",
    "o",
    "Oà",
    "oàna",
    "Oàgaggal",
    "Oàschal",
    "oàschlings",
    "Obacht",
    "obandln",
    "obaschwoàm",
    "Obazda",
    "Odl",
    "Odlgruàm",
    "ōgschdocha",
    "ohm",
    "Oibbm",
    "Oida",
    "Oide",
    "olle",
    "olle zwoà",
    "oraidig",
    "owe",
    "owabeàln",
    "ōzapfa",
    "Pfanakuàcha",
    "Pfandl",
    "Pfara",
    "Pfeàdl",
    "pfià Gōd",
    "pfià de",
    "pfiàd aich Gōd",
    "Pfoi",
    "pfuidaifi",
    "Pratzn",
    "Quaddir",
    "Quadratratschn",
    "quasi",
    "Raina",
    "Raischal",
    "Raiwadatschi",
    "Radi",
    "Radisal",
    "Radla",
    "Rähal",
    "Raina",
    "Raiwadadschi",
    "Ramme",
    "Ranggn",
    "Ratschkattl",
    "Rauschada",
    "Rengsbuàga",
    "Rensemme",
    "resch",
    "Ribbal",
    "Ribisl",
    "Rindvi",
    "Roderuam",
    "Rōsboin",
    "Rōzbibbn, Rōzleffe",
    "Rōzgloggn",
    "Ruach",
    "ruàchad",
    "Ruàm",
    "Ruàmzuzla",
    "ruàschad",
    "Ruß",
    "Sagglzemend",
    "saggrisch",
    "Sauas Lingal",
    "Saubroda",
    "Saufaus",
    "Schandamarie",
    "Schā",
    "schäban",
    "Schädlwä",
    "schbaim",
    "Schbarifanggal",
    "Schbōfàgge",
    "Schbringal",
    "Schbruza",
    "Schdambal",
    "Schdampfa",
    "schdād",
    "Schdägga, Schdäggal",
    "Schdäggalais",
    "Schdäggalfisch",
    "Schdiàngglanda",
    "Schdiàngglandarass",
    "Schdoabuizl",
    "Schdodara",
    "schiach",
    "schiagln",
    "Schiassads",
    "Schlachdschissl",
    "Schmaibixn",
    "Schmaizler",
    "Schmanggal",
    "Schmarra",
    "Schmarrn",
    "Schmoiz",
    "Schnaid",
    "Schnaggla",
    "schnaggsln",
    "Schnaizdiàche",
    "Schnä",
    "Schnäggal",
    "Schnägleggal",
    "Schoàs",
    "Schoàsdromme",
    "schoàsln",
    "Schōfkopfa",
    "schō",
    "Seàwas!",
    "Semme",
    "Sibbzena",
    "soàcha",
    "Soàffa",
    "Sōg amoi!",
    "Sōss",
    "Schraiwal",
    "Schuàbladdla",
    "Schwainas",
    "Schwemm",
    "Schwammal",
    "Semft",
    "Semme",
    "Semmegnedl",
    "Subbn",
    "Subbnkaschbal",
    "Suri",
    "Uàfiech",
    "umanand",
    "umma",
    "ummasunsd",
    "Wabbal",
    "Waddn",
    "Wadschn",
    "Waibsbuid",
    "Waisbià",
    "Waiswuàschd",
    "Waiwalaid",
    "Waiwe",
    "Wambn",
    "Wambo",
    "Wammal",
    "Wassaschnoizn",
    "Weda",
    "Weggal",
    "wià d'Sau",
    "wief",
    "Windbaidl",
    "wisawi",
    "Wixgriffe",
    "wōr",
    "Wōs sogsd?",
    "Wuàschd",
    "Wuàschdfinga",
    "Wuàschdsemme",
    "Wuggal",
    "Xander",
    "Xaver",
    "zach",
    "zam",
    "Zambal",
    "zamfoin lassn",
    "zamgramd",
    "Zamgsuffana",
    "zamrugga",
    "Zānbiàschdn",
    "zefix",
    "zfui",
    "Ziegān",
    "Zipfe",
    "Zipfegladdscha",
    "Zōzn",
    "Zugga",
    "Zuggaschneggal",
    "zupfa",
    "Zwetschgndatschi",
    "Zwetschgnmanschgal",
    "zwieda",
    "Zwiedana",
    "Zwiedawuàzn",
    "Zwiggl",
    "Zwiewe",
    "Zwoàring"
]

},{}]},{},[1])(1)
});