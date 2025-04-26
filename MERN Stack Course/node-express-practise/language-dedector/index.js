const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);

if (langCode === 'und') {
  console.log('Invalid language.'.red);
}
else {
  console.log(language.name.green);
}