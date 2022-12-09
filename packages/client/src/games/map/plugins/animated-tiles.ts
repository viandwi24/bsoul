import Phaser from 'phaser'

export interface TileDataAnimation {
  duration: number
  tileid: number
}

export interface TileData {
  animation?: TileDataAnimation[]
}

export const initAnimatedTiles = (scene: Phaser.Scene, map: Phaser.Tilemaps.Tilemap) => {
  console.log('[Tilemap] [Plugins] [initAnimatedTiles] map', map)

  // init animated tiles data
  console.log('[Tilemap] [Plugins] [initAnimatedTiles] map.tilesets', map.tilesets)

  // add middleware
  for (const layer of map.layers) {
    layer.tilemapLayer.cullCallback = middlewareCullCallback.bind(scene)
  }
}

function middlewareCullCallback(this: Phaser.Scene, layer: Phaser.Tilemaps.LayerData, cam: Phaser.Cameras.Scene2D.Camera, outputArray: any[]|undefined, renderOrder?: number) {
  let tiles = Phaser.Tilemaps.Components.CullTiles(layer, cam, outputArray, renderOrder)

  tiles = tiles.map(processTile.bind(this))

  return tiles
}

function processTile(this: Phaser.Scene, tile: Phaser.Tilemaps.Tile) {
  // get current time
  const time = this.time.now
  const tileData = getTileData(tile)
  if (!tileData || !tileData.animation) return tile

  // get animation data
  const animationData = tileData.animation
  const animationDuration = animationData.reduce((acc, curr) => acc + curr.duration, 0)
  const animationTime = time % animationDuration

  // get current tile
  let currentTile = tile
  let currentDuration = 0
  for (const animation of animationData) {
    currentDuration += animation.duration
    if (animationTime < currentDuration) {
      currentTile = new Phaser.Tilemaps.Tile(
        tile.layer,
        animation.tileid + 1,
        tile.x,
        tile.y,
        tile.width,
        tile.height,
        tile.baseWidth,
        tile.baseHeight,
      )
      break
    }
  }

  return currentTile

  // const tileIndex = (tile.index - (tile.tileset.firstgid - 1) - 1)
  // if (tile.index === 52) {
  //   // console.log('tile 52', getTileData(tile))
  // }
  // if (tile.index === 52 + tile.tileset.firstgid - 1) {
  //   console.log('tile', tile)
  //   tile.setAlpha(0.5)
  // }
  return tile
}


function getTileData(tile: Phaser.Tilemaps.Tile): TileData|undefined {
  const tileIndex = tile.index - 1
  const tileData = (tile.tileset!.tileData as any)[tileIndex]
  return tileData as TileData
}
