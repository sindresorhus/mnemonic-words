import {expectType} from 'tsd';
import mnemonicWords = require('.');
import mnemonicWordsJson = require('./words.json');

expectType<readonly string[]>(mnemonicWords);
expectType<readonly string[]>(mnemonicWordsJson);
