import '@babel/polyfill';
import * as cheerio from 'cheerio';
global.load = cheerio.load;