require 'sinatra'
get '/' do
  
names = ["Aaron", "Tamora", "Lavinia", "Lucius", "Titus", "Publius", "Demetrius", "Bassianus"]
r_name = names[rand(names.length)]

towns = ["Clinton", "Madison", "Franklin", "Washington", "Chester", "Marion", "Greenville", "Springfield"]
r_town = towns[rand(towns.length)]

colors = ["magenta", "yellow", "cyan", "black", "red", "blue", "green", "gray"]
r_color = colors[rand(colors.length)]

bands = ["saw", "wedding", "marching", "hair", "head", "rubber", "sweat", "conduction"]
r_band = bands[rand(bands.length)]

artists = ["van Gogh", "Seurat", "Gaugin", "Matisse", "Toulouse-Lautrec", "Cezanne", "Rousseau", "Bonnard"]
r_artist = artists[rand(artists.length)]

whatevers = [
  "plays banjo",
  "starred in fifth grade production of Titus Andronicus",
  "moonlights as a pastry chef",
  "donates blood twice yearly",
  "allergic to grapes",
  "plays bagpipes",
  "collects buttons",
  "likes naps"
  ]
r_whatever = whatevers[rand(whatevers.length)]


erb(:person, locals:{name: r_name, town: r_town, color: r_color, band: r_band, artist: r_artist, fact: r_whatever})

end
