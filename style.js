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
  {name: 'cstline', color: '#3f51b5'},
  {name: 'cntr', color: '#795548'},
  {name: 'wl', color: '#2196d3'},
  {name: 'wstrl', color: '#00bcd4'},
  {name: 'admbdry', color: '#ef9a9a'},
  {name: 'commbdry', color: '#f44336'},
  {name: 'sbbdry', color: '#c62828'},
  {name: 'railcl', color: '#000000'},
  {name: 'rdcompt', color: '#000000'},
  {name: 'rdedg', color: '#000000'},
  {name: 'bldl', color: '#9e9e9e'}
]
const points = [
  {name: 'elevpt', color: '#ff0000'},
  {name: 'gcp', color: '#ff0000'},
  {name: 'sbapt', color: '#ff0000'},
  {name: 'commpt', color: '#ff0000'},
  {name: 'admpt', color: '#ff0000'}
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
