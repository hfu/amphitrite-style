let json = {
  version: 8,
  sources: {
    fgd: {
      type: 'vector', minzoom: 10, maxzoom: 16, 
      tiles: ['https://hfujimura.gitlab.io/fukuoka/{z}/{x}/{y}.pbf'],
      attribution: '国土地理院による基盤地図情報（基本項目）のベクトルタイル提供実験データを加工して作成'
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

const layers = [
  {name: 'cstline'},
  {name: 'cntr'},
  {name: 'rdedg'},
  {name: 'elevpt'},
  {name: 'bldl'},
  {name: 'gcp'},
  {name: 'wl'},
  {name: 'admpt'},
  {name: 'rdcompt'},
  {name: 'commbdry'},
  {name: 'admbdry'},
  {name: 'wstrl'},
  {name: 'commpt'},
  {name: 'railcl'},
  {name: 'sbbdry'},
  {name: 'sbapt'},
]

for(layer of layers) {
  json.layers.push({
    id: layer.name, type: 'line', 
    source: 'fgd', 'source-layer': layer.name,
    layout: {'line-join': 'round', 'line-cap': 'round'},
    paint: {'line-color': '#000000', 'line-width': 2}
  })
}

console.log(JSON.stringify(json, null, 2))
