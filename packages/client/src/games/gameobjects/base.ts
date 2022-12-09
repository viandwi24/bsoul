import { Tilemap } from "../map/tilemap"

export enum GameObjectType {
  Door = 'Door',
  Chest = 'Chest',
  Key = 'Key',
  Sprite = 'Sprite',
  Player = 'Player',
  Enemy = 'Enemy',
}

// Phaser.Physics.Arcade.Sprite
export class GameObjectBase extends Phaser.Physics.Arcade.Sprite {
  gameObjectType: GameObjectType = GameObjectType.Sprite
  objectData: any = {}
  map!: Tilemap
  enableDepthSort = true
  indicatorNameTxt!: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    // console.log('gameobjectbase', x, y, texture, frame)

    // indicator name
    // const indicatorNameTxt = this.scene.add.text(0, 0, this.gameObjectType, {
    //   fontSize: '12px',
    //   color: '#ffffff',
    // })
    // indicatorNameTxt.setOrigin(0.5, 0.5)
    // indicatorNameTxt.setDepth(9999)
    // this.indicatorNameTxt = indicatorNameTxt

    // events
    // scene.events.on(Phaser.Scenes.Events.POST_UPDATE, this.update.bind(this))
    // scene.events.on(Phaser.Scenes.Events.SHUTDOWN, this.destroy.bind(this))
    // this.scene.events.off(Phaser.Scenes.Events.POST_UPDATE, this.update.bind(this))
  }

  setObjectData(data: any, map: Tilemap) {
    this.map = map
    this.objectData = {...data || {}}
    this.onObjectDataSetted(this.objectData)
  }

  onObjectDataSetted(_: {}) {}

  getDataProperty(key: string, defaultValue?: any) {
    const prop = this.objectData?.properties.find((p: any) => p.name === key)
    if (!prop) return defaultValue || undefined

    if (prop?.type === 'string') {
      try {
        const tryparse = JSON.parse(prop.value)
        return tryparse
      } catch (error) {
        return prop.value as string
      }
    }
    return prop?.value
  }

  calculateSortDepthPoint() {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
    }
  }

  preUpdate(time: number, delta: number) {
    try {
      super.preUpdate(time, delta)
    } catch (error) {

    }
  }

  update(time: number, delta: number) {
    try {
      super.update(time, delta)
    } catch (error) {

    }
  }

  postUpdate(time: number, delta: number) {
    try {
      // @ts-ignore
      super.postUpdate(time, delta)
    } catch (error) {}
  }

  destroy(fromScene?: boolean): void {
    super.destroy(fromScene)
  }
}
