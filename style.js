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
  {name: 'admbdry', color: '#ef9a9a', width: 8},
  {name: 'commbdry', color: '#ffcdd2', width: 4},
  {name: 'sbbdry', color: '#ffebee', width: 2},
  {name: 'cstline', color: '#3f51b5'},
  {name: 'cntr', color: '#795548', width: 2},
  {name: 'wl', color: '#2196d3'},
  {name: 'wstrl', color: '#00bcd4'},
  {name: 'railcl', color: '#5d4037', width: 3},
  {name: 'rdcompt', color: '#757575'},
  {
    name: 'rdedg', color: '#616161', 
    width: ['interpolate', ['linear'], ['zoom'], 14, 1, 16, 2]
  },
  {name: 'bldl', color: '#9e9e9e'}
]
const points = [
  {name: 'elevpt', color: '#000000', text: 'elevpt'},
  {name: 'gcp', color: '#000000', text: 'gcp'},
  {name: 'sbapt', color: '#000000', text: 'sbapt'},
  {name: 'commpt', color: '#000000', text: 'commpt'},
  {name: 'admpt', color: '#000000', text: 'admpt'}
]

for(layer of lines) {
  json.layers.push({
    id: layer.name, type: 'line', 
    source: 'fgd', 'source-layer': layer.name,
    layout: {'line-join': 'round', 'line-cap': 'square'},
    paint: {
      'line-color': layer.color, 
      'line-width': layer.width ? layer.width : 1}
  })
}
for(layer of points) {
  json.layers.push({
    id: layer.name, type: 'symbol',
    source: 'fgd', 'source-layer': layer.name,
    layout: {
      'text-field': layer.text,
      'text-font': ['NotoSansCJKjp-Regular'],
      'text-size': 11
    },
    paint: {
      'text-color': layer.color
    }
  })
}

console.log(JSON.stringify(json, null, 2))
