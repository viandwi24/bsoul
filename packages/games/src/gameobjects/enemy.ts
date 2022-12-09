import Phaser from "phaser"
import { GameObjectBase, GameObjectType } from "./base"

export enum EnemyType {
  Mage = "mage",
}

export class Enemy extends GameObjectBase {
  state: 'idle' | 'walk' | 'wander' | 'attack' = 'idle'
  enemyType: EnemyType = EnemyType.Mage
  enemyBody!: Phaser.GameObjects.Rectangle

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Enemy

    // if mage
    if (this.enemyType === EnemyType.Mage) {
      this.enemyBody = scene.add.rectangle(0, 0, 16, 16, 0xff0000)
    }
  }

  onObjectDataSetted(_: {}): void {
    console.log('enemy data setted', this.objectData)
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    this.enemyBody.setPosition(this.x, this.y)
    this.enemyBody.setDepth(99999)
  }
}
