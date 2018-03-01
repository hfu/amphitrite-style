let json = {
  version: 8,
  sources: {
    fgd: {
      type: 'vector', minzoom: 10, maxzoom: 16, 
      tiles: ['https://hfujimura.gitlab.io/fukuoka/{z}/{x}/{y}.pbf'],
      attribution: 'Produced from GeoJSON Vector Tile Experiment data by Geospatial Information Authority of Japan'
    }
  },
  // sprite: '',
  glyphs: 'https://hfu.github.io/noto-jp/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background', type: 'background', 
      paint: {'background-color': '#ffffff'}
    }
  ]
}

const lines = [
  {name: 'cstline', color: '#000000'},
  {name: 'cntr', color: '#000000'},
  {name: 'wl', color: '#000000'},
  {name: 'wstrl', color: '#000000'},
  {name: 'admbdry', color: '#000000'},
  {name: 'commbdry', color: '#000000'},
  {name: 'sbbdry', color: '#000000'},
  {name: 'railcl', color: '#000000'},
  {name: 'rdedg', color: '#000000'},
  {name: 'bldl', color: '#000000'}
]
const points = [
  {name: 'rdcompt', color: '#000000'},
  {name: 'elevpt', color: '#000000'},
  {name: 'gcp', color: '#000000'},
  {name: 'sbapt', color: '#000000'},
  {name: 'commpt', color: '#000000'},
  {name: 'admpt', color: '#000000'}
]

for(layer of lines) {
  json.layers.push({
    id: layer.name, type: 'line', 
    source: 'fgd', 'source-layer': layer.name,
    layout: {'line-join': 'round', 'line-cap': 'round'},
    paint: {'line-color': layer.color, 'line-width': 1}
  })
}
for(layer of points) {
  json.layers.push({
    id: layer.name, type: 'circle',
    source: 'fgd', 'source-layer': layer.name,
    paint: {
      'circle-radius': 3,
      'circle-color': layer.color
    }
  })
}

console.log(JSON.stringify(json, null, 2))
