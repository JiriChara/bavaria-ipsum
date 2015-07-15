[![Build Status](https://travis-ci.org/JiriChara/bavaria-ipsum.svg?branch=master)](https://travis-ci.org/JiriChara/bavaria-ipsum)
[![Code Climate](https://codeclimate.com/github/JiriChara/bavaria-ipsum/badges/gpa.svg)](https://codeclimate.com/github/JiriChara/bavaria-ipsum)

# bavaria-ipsum v1.0.1

bavaria-ipsum is a JavaScript library inspired by [http://bavaria-ipsum.de/](http://bavaria-ipsum.de/). It simply generates random Bavarian text.

## Installation

Node:

```shell
npm install bavaria-ipsum
```

Bower:


```shell
bower install bavaria-ipsum
```

Or get it from GitHub:

```shell
wget https://raw.githubusercontent.com/JiriChara/bavaria-ipsum/master/dist/bavaria-ipsum.min.js
```

## Usage

In browser `BavariaIpsum` global variable will be available. In node you have to require it:

```javascript
var BavariaIpsum = require('bavaria-ipsum');
```

Generate random Bavarian word:

```javascript
var ipsum = new BavariaIpsum();
ipsum.generateWord();
// => 'griaß'
```

Generate random Bavarian sentence:

```javascript
var ipsum = new BavariaIpsum();
ipsum.generateSentence();
// => 'Hinter\'m Gmiadlichkeit luja mehra bloß pfundig.'

// if you need a specific word count
ipsum.generateSentence(2);
// => 'Samma aso.'
```

Generate random Bavarian paragraph:

```javascript
var ipsum = new BavariaIpsum();
ipsum.generateParagraph();
// => 'Biaschlegl woar singan vasteh Gidarn auszutzeln Sodala auf\'d Wolpern pfenningguat jedza schnacksln Biazelt bravs auf\'n Wolpern hogg Obandeln. Graudwiggal wiavui Singan landla oans a Heimatland auszutzeln Mordsgaudi o\'ha uns Maibam Fünferl blärrd Heimatland großherzig Weibaleid A. Beidl In spotzerl aweng Bia Gwiass gfoids, g\'hupft Reiwadatschi meidromml de hinter\'m, Ohrwaschl Ewig Prosit Wia. Schoo um huift gibt\'s Mordsgaudi. Basd eam, fei Bua hoid, Schuabladdla Gams maibam schuf Bavariae Oim sauwedda lustiga, sauakraud Maibam greana legst Habedehre Bussal sepp. Schorsch Marterl In Weibaleid. Obandeln Auffisteign Wiesn etza heid wolln Diandldrahn nia greana. Anbandeln auffi. Kneedl eana weibaleid Gschmeidig Sei da samma glei Wea wolln naa leck, des. Bloß sauwedda Hetschapfah Watschnbaam wiavui, hoggd Sauwedda. Schmankal zua Maß nachad, enzian, In, Lem. Obacht nacha pfundig glacht gean Greaßt Bradwurschtsemmal Griasnoggalsubbm du, sauakraud Singan ausgähd Haferl Gar gar Bua Umma. Aasgem von wo Hoam In, woschechta Obazda no geh Kimmt Schuabladdla, Gipfe glei. Fias Sauakraud anbandeln. Basd Wea baamwach Foidweg sammawiedaguad griasd iabaroi Wuascht wann ausgähd moand vui gsuffa eich Semmlkneedl Do Ledahosn See. Blosmusi muas Damischa nei. Musi mechad Gaudi amoi fensdaln Wea d\' koa Berg charivari woass Oachkatzlschwoaf i ghupft.'

// if you wish a specific count of sentences
ipsum.generateParagraph(1);
// => 'Hoam in du Gwiass hod Wos woass Sauakraud geh lem Wuascht.'

// if you wish the text to start with 'Bavaria ipsum dolor sit amet'
ipsum.generateParagraph(2, { useStartingSentence: true });
// => 'Bavaria ipsum dolor sit amet Gibt\'s I nois. Helfgod leck hi gor, Auffisteign Gmiadlichkeit.'

// it works even w/o length specified
ipsum.generateParagraph({ useStartingSentence: true });
// => 'Bavaria ipsum dolor sit amet Hoggd schee Koa In, Blosmusi. Haberertanz narrisch Radi Buachbinda Sauakraud Im Spezi Weiznglasl, Buachbinda Deandl pfiad. Hog Lewakaas nois schaugn gschmeidig, Gelbe haferl Fünferl A singd vui. Koa Suri Im scho ledahosn sepp Bitt sammawiedaguad soweid Auffisteign schnacksln nois Fünferl ognudelt Samma no. Au glei aweng Biawambn radler maßkruag Wiesn Biagadn moan Gidarn imma, Klampfn guad no, Haberertanz. Sauwedda Haferl Charivari damischa Brezn Singan gar Zwedschgndadschi red lustiga, wui oba hera Graudwiggal gfreit schuf. Marterl Biaschlegl wolpern fei, nackata sei Baamwach charivari. Wurscht Wanninger gfreit Ramasuri Gamsbart need Gscheckate Heiwog im sauwedda. Sagrisch Steckerleis Wolpern, kimmt schorsch ganze fias sagrisch Obazda. Schee A vasteh Kuaschwanz Fingahaggln.'

```

You can also overwrite following options:

```javascript
var ipsum = new BavariaIpsum({
  startSentence: 'Bavaria Ipsum dolor sit amet',
  minSentenceWords: 2,
  maxSentenceWords: 20,
  showCommaChance: 0.1, // chance to show comma after some word in a sentence
  minParagraphSentences: 2,
  maxParagraphSentences: 20
});
```

Copyright © 2015 Jiri Chara. All Rights Reserved.
