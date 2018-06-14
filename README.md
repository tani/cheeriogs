# cheerio for Google Apps Script

This project is unofficial update of https://github.com/3846masa/cheerio-gasify.

Difference to the project is follows.

- Using webpack with [gas-webpack-plugin](https://github.com/fossamagna/gas-webpack-plugin)
- Updating [cheerio](https://github.com/cheeriojs/cheerio) to 1.0.0-rc.2
- Exporting the function `load` as same as `cheerio.load`


Script ID: `1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0`

## Usage

```js
const content = UrlFetchApp.fetch('https://example.com/').getContentText();
const $ = Cheerio.load(content);
Logger.log($('p .blah').fist().text()); // blah blah blah ...
```
