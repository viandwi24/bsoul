import Phaser from 'phaser'
import { GameObjectBase } from '../gameobjects/base'
import { GameObjectClassContructor } from '../gameobjects'
import { initAnimatedTiles } from './plugins/animated-tiles'
import { initColliderTiles } from './plugins/collider-tiles'
// import { TileAnimated } from './gameobjects/tile-animated'
// import { initAnimatedTiles } from './plugins/animated-tiles'

export interface TilemapConfig {
  depthStart: number
  depthBetweenLayers: number
}

export const TilemapDefaultConfig: TilemapConfig = {
  depthStart: 10,
  depthBetweenLayers: 15,
}

export class Tilemap {
  data!: any
  map!: Phaser.Tilemaps.Tilemap
  tilesets: Phaser.Tilemaps.Tileset[] = []
  layers: Phaser.Tilemaps.TilemapLayer[] = []
  config = TilemapDefaultConfig
  isCreated = false
  gameobjects: GameObjectBase[] = []
  gameobjects_groups: Phaser.Physics.Arcade.StaticGroup[] = []
  object_resortables: Phaser.GameObjects.GameObject[] = []

  colliders: Phaser.GameObjects.GameObject[] = []

  constructor(public scene: Phaser.Scene, public key: string, url: string) {
    console.log('[Tilemap] load', key, url)
    const loader = scene.load.tilemapTiledJSON({
      key,
      url,
    })
    scene.events.on(Phaser.Scenes.Events.PRE_UPDATE, this.preUpdate.bind(this))
    scene.events.on(Phaser.Scenes.Events.UPDATE, this.update.bind(this))
    scene.events.on(Phaser.Scenes.Events.POST_UPDATE, this.postUpdate.bind(this))
    // on destroy
    scene.events.once(Phaser.Scenes.Events.DESTROY, () => {
      scene.events.off(Phaser.Scenes.Events.PRE_UPDATE, this.preUpdate.bind(this))
      scene.events.off(Phaser.Scenes.Events.UPDATE, this.update.bind(this))
      scene.events.off(Phaser.Scenes.Events.POST_UPDATE, this.postUpdate.bind(this))
      this.destroy()
    })
    loader.on(Phaser.Loader.Events.FILE_COMPLETE, (fKey: string, fType: string, file: any) => {
      if (key === fKey && fType === 'tilemapJSON') {
        console.log('[Tilemap] load complete', key, url)
        const mapData = file
        this.data = mapData
        // console.log('mapData', mapData)
        // this.data = this.buildData(data)

        // load tilesets
        for (const tileset of mapData.tilesets) {
          if (scene.textures.exists(tileset.name)) return
          const tilesetUrl = (url.split('/').splice(0, url.split('/').length-1).join('/')) + '/' + (tileset as any).image
          const opts = {
            frameWidth: tileset.tilewidth,
            frameHeight: tileset.tileheight,
          }
          scene.load.spritesheet(
            tileset.name,
            tilesetUrl,
            opts
          )
        }
        scene.load.start()
      }
    })
    scene.events.once(Phaser.Scenes.Events.CREATE, () => {
      let i = 0
      while (i < 100 * 1) {
        i++
      }
      this.create()
    })
    scene.load.start()
  }

  preload() {
    // create tilesets
    // const tilesets: Phaser.Tilemaps.Tileset[] = []
    // for (const tileset of map.tilesets) {
    //   tilesets.push(
    //     map.addTilesetImage(
    //       tileset.name,
    //       tileset.name,
    //       tileset.tileWidth,
    //       tileset.tileHeight,
    //       undefined,
    //       tileset.tileSpacing,
    //     )
    //   )
    // }
  }

  create() {
    if (this.isCreated || typeof this.data === 'undefined') return
    console.log('tilemap data', this.data)

    const map = this.scene.add.tilemap(
      this.key,
      this.data.tilewidth || 16,
      this.data.tileheight || 16,
      this.data.width,
      this.data.height
    )
    this.map = map
    console.log('[Tilemap] map', map)

    // create tilesets
    const tilesets: Phaser.Tilemaps.Tileset[] = []
    for (const tileset of this.data.tilesets) {
      // create tileset
      const t = map.addTilesetImage(
        tileset.name,
        tileset.name,
        tileset.tilewidth,
        tileset.tileheight,
        undefined,
        tileset.tilespacing,
      )!
      tilesets.push(t)
    }
    this.tilesets = tilesets

    // create layers
    let _tmpCurrLayerDepth = this.config.depthStart
    const layers: Phaser.Tilemaps.TilemapLayer[] = []
    for (const layer of map.layers) {
      const l = map.createLayer(layer.name, tilesets)!
      l.setName('tilemap_layer_' + layer.name)
      l.setDepth(_tmpCurrLayerDepth)
      l.setCollisionByProperty({ collides: true })
      layers.push(l)
      _tmpCurrLayerDepth += this.config.depthBetweenLayers
      console.log('[Tilemap] [create] layer', layer.name, l.name)
    }
    this.layers = layers

    // create objects
    const objects_layers = this.map.objects
      .filter(o => o instanceof Phaser.Tilemaps.ObjectLayer)
    for (const layer of objects_layers) {
      // console.log('[Tilemap] [create] [object_layer]', layer.name)

      // const group = this.scene.physics.add.staticGroup({ classType: Door })
      for (const object_data of layer.objects) {
        // console.log((object_data as any).class)
        let bestT = map.tilesets[0]
        map.tilesets.forEach(t => {
          if (t.firstgid <= (object_data.gid || 0)) {
            bestT = t
          }
        })
        // let objectData: any
        if (bestT) {
          try {
            // console.log(this.data.tilesets)
            // objectData = bestT.tileData[(object_data.gid || 0) - bestT.firstgid]
            // objectData = [this.data.tilesets || []]
            //   .find(t => t.name === bestT.name)?.tiles
            const tilesData = this.data.tilesets.find((t: any) => t.name === bestT.name)?.tiles || []
            const id = (object_data.gid || 0) - bestT.firstgid
            const tileData = tilesData.find((t: any) => t.id === id)
            // console.log(bestT, tilesData, tileData)
            // console.log(objectData, object_data)

            if (tileData) {
              const objClass = tileData.class
              if (objClass) {
                console.log('[Tilemap] [create] [object_layer] [object]', object_data.name, objClass)
                const getObjClassConstructor = () => GameObjectClassContructor[objClass]
                const tileset = this.getTilesetFromGid(object_data.gid!)!
                const actualX = object_data.x! + object_data.width! * 0.5
                const actualY = object_data.y! - object_data.height! * 0.5
                const obj = new (getObjClassConstructor())(this.scene, actualX, actualY, tileset.name, object_data.gid! - this.map.getTileset(tileset.name)!.firstgid) as GameObjectBase
                // const tD = {...tileData}
                obj.setName(object_data.name)
                obj.setDepth(0)
                obj.setInteractive()
                const newData = {
                  properties: []
                } as any
                if (tileData.properties) {
                  newData.properties = [...tileData.properties.map((m: any) => ({name: m.name, value: m.value, type: m.type}))]
                  // console.log('Ada properties default', objClass, tileData)
                  if (object_data.properties) {
                    // console.log('Ada properties custom', objClass, object_data)
                    object_data.properties.forEach((p: any) => {
                      try {
                        const findIndex = newData.properties.findIndex((m: any) => m.name === p.name && m.type === p.type)
                        if (findIndex >= 0) newData.properties[findIndex].value = p.value
                      } catch (error) {
                        console.error(`ada p error ${error}`, error)
                      }
                    })
                  }
                  // console.log('ada properties akhir', objClass, newData)
                  obj.setObjectData(newData, this)
                } else {
                  obj.setObjectData({...newData}, this)
                }
                // if (objClass === 'Door') console.log('Door', tD, object_data)
                // if (tD.properties && tD.properties.length > 0 && object_data.properties && object_data.properties?.length > 0) {
                //   const newTd = {...tD}
                //   object_data.properties?.forEach((p: any) => {
                //     const f = newTd.properties.find((fp: any) => fp.name === p.name)
                //     if (f) {
                //       f.value = p.value
                //     } else {
                //       newTd.properties.push(p)
                //     }
                //   })
                //   obj.setObjectData({...newTd}, this)
                //   console.log('door ada', tD, object_data)
                // } else {
                //   obj.setObjectData({...tD}, this)
                // }
                this.scene.add.existing(obj)
                this.gameobjects.push(obj)
                // if (tD.properties && tD.properties.length > 0) {
                //   object_data.properties?.forEach((p: any) => {
                //     const f = tD.properties.find((fp: any) => fp.name === p.name)
                //     if (f) {
                //       f.value = p.value
                //     } else {
                //       tD.properties.push(p)
                //     }
                //   })
                // }



                // const findObjGroup = this.gameobjects_groups.find(g => g.name === objClass)
                // if (findObjGroup) {
                //   const obj = this.addObjectFromTiled(
                //     findObjGroup,
                //     object_data,
                //     object_data.name,
                //     {...tileData},
                //   )
                //   if (obj) this.gameobjects.push(obj)
                // } else {
                //   const classMappingConstructor = {
                //     'Door': Door,
                //     'Chest': Chest
                //   }
                //   const getObjClassConstructor = () => classMappingConstructor[objClass]
                //   const group = this.scene.physics.add.staticGroup({ classType: getObjClassConstructor(), name: objClass })
                //   this.gameobjects_groups.push(group)
                //   const obj = this.addObjectFromTiled(
                //     group,
                //     object_data,
                //     object_data.name,
                //     {...tileData},
                //   )
                //   if (obj) this.gameobjects.push(obj)
                // }
              }
            }

          } catch (error) {}
        }
        // console.log(this.gameobjects_groups)

        // const obj = this.addObjectFromTiled(
        //   group,
        //   object_data,
        //   object_data.name,
        //   {}, // objectData
        // )
        // if (obj) {
        //   this.gameobjects.push(obj)
        // }
        // console.log('[Tilemap] [create] [object_layer] [object]', object_data)
      }
      // const object_classes = ['Door', 'Chest', 'Sprite']
      // for (const objClass of object_classes) {
      //   map.createFromObjects(
      //     layer.name,
      //     {

      //     }
      //   )
      // }
    }

    // plugins
    // plugin::collider
    initColliderTiles(this.scene, this)
    // plugin::tiles
    initAnimatedTiles(this.scene, this.map)

    //
    this.isCreated = true
    console.log('[Tilemap] [create] [end]', this.getLayerByName('LAYER_PLAYER')?.depth)
  }

  destroy() {
    this.gameobjects.forEach((obj) => obj?.destroy.bind(obj)(true))
    this.map.destroy()
  }

  preUpdate(time: number, delta: number) {
    this.gameobjects.forEach((obj) => {
      try {
        obj.preUpdate.bind(obj)(time, delta)
      } catch (error) {

      }
    })
  }

  update(time: number, delta: number) {
    // resort with depth
    this.sortDepthLayers()
    const centerDepth = this.getLayerByName('LAYER_PLAYER')?.depth || 0
    const sorted = this.gameobjects.sort((a, b) => {
      return a.calculateSortDepthPoint().y - b.calculateSortDepthPoint().y
    })
    // set depth
    for (let i = 0; i < sorted.length; i++) {
      const obj = sorted[i]
      obj.setDepth((centerDepth - this.gameobjects.length / 2) + i)
    }
    this.gameobjects.forEach((obj) => obj.update.bind(obj)(time, delta))
  }

  postUpdate(time: number, delta: number) {
    this.gameobjects.forEach((obj) => {
      try {
        obj.postUpdate.bind(obj)(time, delta)
      } catch (error) {

      }
    })
  }

  sortDepthLayers() {
    let currDepth = this.config.depthStart
    this.layers.forEach(l => {
      if (l.name === 'tilemap_layer_LAYER_PLAYER') {
        l.setDepth(currDepth + Math.floor(this.gameobjects.length / 2) + 2)
        currDepth += this.gameobjects.length + 2 + this.config.depthBetweenLayers
        return true
      } else {
        l.setDepth(currDepth)
      }
      currDepth += this.config.depthBetweenLayers
    })
    // console.log(this.layers.map(l => [l.name, l.depth].join(',')))
  }

  /**
   * Get layer by name
   * @param name
  */
  getLayerByName(name: string) {
    return this.layers.find(l => l.name === `tilemap_layer_${name}`)
  }

  getObjInLayer(layerName: string, objName: string) {
    const layer = this.map.getObjectLayer(layerName)
    if (!layer) return undefined
    const obj = layer.objects.find(o => o.name === objName)
    if (!obj) return undefined
    return obj
  }

  addObjectFromTiled(
    group: Phaser.Physics.Arcade.StaticGroup,
    object: Phaser.Types.Tilemaps.TiledObject,
    key: string,
    objectData: any,
    // depth?: number,
  ) {
    const tileset = this.getTilesetFromGid(object.gid!)!

    const actualX = object.x! + object.width! * 0.5
    const actualY = object.y! - object.height! * 0.5
    const obj = group
      .get(actualX, actualY, tileset.name, object.gid! - this.map.getTileset(tileset.name)!.firstgid)
      // .setDepth(depth || actualY)
      .setName(key)

    obj.setObjectData(objectData || {}, this)

    return obj

    // const ob = (new (group.classType(this.scene, actualX, actualY, tileset.name, object.gid! - this.map.getTileset(tileset.name)!.firstgid) as any))
    //   .setDepth(depth || actualY)
    //   .setName(key)
    // ob.setObjectData(objectData || {}, this)
    // return ob
  }

  getTilesetFromGid(gid: number) {
    const tilesetSortFirstgid = this.tilesets.sort((a, b) => a.firstgid - b.firstgid)
    let bestTileset = tilesetSortFirstgid[0]
    for (const tileset of tilesetSortFirstgid) {
      if (gid >= tileset.firstgid) {
        bestTileset = tileset
      }
    }
    return bestTileset
  }
}
