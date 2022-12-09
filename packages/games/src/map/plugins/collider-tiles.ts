import Phaser from 'phaser'
import { Tilemap } from '../tilemap'

export interface TileDataObjectGroupObject {
  id: number
  name: string
  height: number
  width: number
  x: number
  y: number
  visible: boolean
  rotation: number
  rectangle?: boolean
}

export interface TileDataObjectGroup {
  draworder: string
  id: number
  name: string
  opacity: number
  type: string
  visible: boolean
  x: number
  y: number
  objects: TileDataObjectGroupObject[]
}

export interface TileData {
  objectgroup: TileDataObjectGroup
}

export const initColliderTiles = (scene: Phaser.Scene, map: Tilemap) => {
  console.log('[Tilemap] initColliderTiles', scene, map)

  // loop tiles
  for (const layer of map.map.layers) {
    layer.tilemapLayer.forEachTile((tile) => {
      const data = tile.getTileData() as TileData
      if (!data || !(data?.objectgroup)) return

      // process tile
      const objShapes = getShapeColliderFromGameObjects(scene, tile)

      if (objShapes.length > 0) {
        objShapes.forEach((shape) => {
          map.colliders.push(shape)
          scene.physics.add.existing(shape, true)
        })
      }
    })
  }
}

export const getShapeColliderFromGameObjects = (scene: Phaser.Scene, tile: Phaser.Tilemaps.Tile) => {
  const colliders: Phaser.GameObjects.GameObject[] = []

  const data = tile.getTileData() as TileData
  if (!data || !(data?.objectgroup)) return colliders

  // process tile
  const tileWorldPos = tile.tilemapLayer!.tileToWorldXY(tile.x, tile.y)
  const objectsgroups = data.objectgroup.objects
  for (const obj of objectsgroups) {
    const objectX = tileWorldPos.x + obj.x
    const objectY = tileWorldPos.y + obj.y
    const objectW = obj.width
    const objectH = obj.height
    let objShape: Phaser.GameObjects.GameObject | undefined
    const fillColor: any|undefined = scene.game.gameClient.phaser.config.physics.arcade?.debug ? 0xff0000 : undefined

    const rect = scene.add.rectangle(
      objectX,
      objectY,
      objectW,
      objectH,
      fillColor
    )
    rect.setDepth(9999)
    rect.setOrigin(0)
    objShape = rect

    // if any shape
    if (objShape) {
      colliders.push(objShape)
    }
  }

  return colliders
}
