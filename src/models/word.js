
/* eslint-disable func-names */

import fs from 'fs';
import path from 'path';

const file = path.join(__dirname, '../../data/word.txt');

function Word(o) {
  this.word = o.word;
}

module.exports = Word;

Word.find = function () {
  let wordSelected;
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  console.log('List of Words: ', data);
  const wordLength = data.length;
  const wordIndex = Math.floor(Math.random() * wordLength);

  for (let i = 0; i < wordLength; i++) {
    if (i === wordIndex) {
      wordSelected = data[i];
      break;
    }
  }
  console.log('wordSelected: ', wordSelected);
  return wordSelected;
};
