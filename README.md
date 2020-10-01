# cheerio for Google Apps Script

This project is unofficial update of https://github.com/3846masa/cheerio-gasify.

Difference to the project is follows.

- Using webpack with [gas-webpack-plugin](https://github.com/fossamagna/gas-webpack-plugin)
- Updating [cheerio](https://github.com/cheeriojs/cheerio) to 1.0.0-rc.3
- Exporting the function `load` as same as `cheerio.load`


Script ID: `1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0`

## Adding the library to your project

Cheerio (cheeriogs) for Google Apps Script is made available as a script library. This is how you add it to your project:

Select "Resources" > "Libraries..." in the Google Apps Script editor.
Enter the project key (1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.)
Select the highest version number, and choose `Cheerio` as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work.)
Press Save. You can now use the Cheerio (cheeriogs) library in your code.

## Usage

```js
function getContent_(url) {
    return UrlFetchApp.fetch(url).getContentText()
}
```

### Returns the content of Wikipedia's Main Page

```js
  const content = getContent_('https://en.wikipedia.org');
  const $ = Cheerio.load(content);
  Logger.log($('#mp-right').text());
```

### Returns the content of the first paragraph `<p>` of Wikipedia's Main Page

```js
  const content = getContent_('https://en.wikipedia.org');
  const $ = Cheerio.load(content);
  Logger.log($('p').first().text());
```

### Changes the content of the gas server part before hosting. **!Do not do this. But you can.**

```js
  const html = HtmlService.createHtmlOutputFromFile("index").getContent();
  const $ = Cheerio.load(html);
  $("#main").append("<p>Cheeriosse!!1</p>");
  return HtmlService.createHtmlOutput(
    Utilities.formatString("<html>%s</html>", $('html').html())
  );
```

## FAQ

### Why does not my project debug?

The latest Google App Script uses V8 runtime.
Version 12 of Cheeriogs supports the runtime.
Please upgrade your script.
