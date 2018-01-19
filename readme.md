# mnemonic-words [![Build Status](https://travis-ci.org/sindresorhus/mnemonic-words.svg?branch=master)](https://travis-ci.org/sindresorhus/mnemonic-words)

> List of words for making random mnemonic sentences

It could be used for [generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

The word list is just a [JSON file](words.json) and can be used anywhere.


## Install

```
$ npm install mnemonic-words
```


## Usage

```js
const mnemonicWords = require('mnemonic-words');

console.log(mnemonicWords);
//=> ['abandon', 'ability', …]
```


## Related

- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
