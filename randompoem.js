var request = require('request');
var cheerio = require('cheerio');

var poemid = 15717;
var url = 'http://www.poets.org/viewmedia.php/prmMID/' + poemid;

    request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);

var title = $('h1').text();
var poem = $('h1').parent().parent().next().next().next().next().text().trim();

console.log(url);
console.log(title);
console.log(poem);        
    });
