var ejs = require('ejs');
var fs = require('fs');
var express = require('express')
var app = express();

app.get('/', function(req, res) {

var names = ["Aaron", "Tamora", "Lavinia", "Lucius", "Titus", "Publius", "Demetrius", "Bassianus"]
var r_name = names[Math.floor(Math.random() * names.length)]
var towns = ["Clinton", "Madison", "Franklin", "Washington", "Chester", "Marion", "Greenville", "Springfield"]
var r_town = towns[Math.floor(Math.random() * towns.length)]
var colors = ["magenta", "yellow", "cyan", "black", "red", "blue", "green", "gray"]
var r_color = colors[Math.floor(Math.random() * colors.length)]
var bands = ["saw", "wedding", "marching", "hair", "head", "rubber", "sweat", "conduction"]
var r_band = bands[Math.floor(Math.random() * bands.length)]
var artists = ["van Gogh", "Seurat", "Gaugin", "Matisse", "Toulouse-Lautrec", "Cezanne", "Rousseau", "Bonnard"]
var r_artist = artists[Math.floor(Math.random() * artists.length)]
var whatevers = [
"plays banjo",
"starred in fifth grade production of Titus Andronicus",
"moonlights as a pastry chef",
"donates blood twice yearly",
"allergic to grapes",
"plays bagpipes",
"collects buttons",
"likes naps"
]
var r_whatever = whatevers[Math.floor(Math.random() * whatevers.length)]

var str = fs.readFileSync('person.ejs', 'utf8');
var rendered = ejs.render(str,{name: r_name, town: r_town, color: r_color, band: r_band, artist: r_artist, fact: r_whatever} );
  res.send(rendered);


});
app.listen(3000);
