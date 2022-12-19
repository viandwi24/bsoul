import Phaser from "phaser"
import { GameObjectBase, GameObjectType } from "./base"

export class Chest extends GameObjectBase {
  state: 'closed' | 'open' = 'closed'
  frames: number[] = []

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Chest
  }

  onObjectDataSetted(): void {
    this.state = this.getDataProperty('state', 'closed') as 'closed' | 'open'
    this.frames = this.getDataProperty('frames', []) as number[]

    // create animation
    this.anims.create({
      key: 'chest-open',
      frameRate: 4,
      repeat: 0,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })),
      ],
    })

    if (this.state === 'open') this.openChest()
  }

  update(_time: number, _delta: number) {
    // if (this.state === 'closed')
  }

  isClosed() {
    return this.state === 'closed'
  }

  openChest() {
    this.state = 'open'
    this.anims.play('chest-open')

    setTimeout(() => {
      // create sprite effect
      const collectedFxSprite = this.scene.add.sprite(this.x, this.y, 'particles')
      collectedFxSprite.setScale(0.5)
      collectedFxSprite.setDepth(this.depth)
      collectedFxSprite.setOrigin(0.5)
      collectedFxSprite.anims.create({
        key: 'collected',
        frameRate: 10,
        repeat: 0,
        frames: collectedFxSprite.anims.generateFrameNames('particles', {
          prefix: 'collected-tile00',
          start: 0,
          end: 5,
          suffix: '.png',
        }),
      })
      collectedFxSprite.on('animationcomplete', () => {
        collectedFxSprite.destroy(true)
        // this.destroy(true)
      })
      collectedFxSprite.play('collected')

      // create particles for chest
      const particles = this.scene.add.particles('particles', 'rect.png')
      particles.setDepth(this.depth)
      // create particle slow level up to top
      const emitter = particles.createEmitter({
        x: this.x,
        y: this.y,
        lifespan: 500,
        speed: { min: 0, max: 100 },
        angle: { min: -100, max: -80 },
        scale: { start: 0.5, end: 0 },
        quantity: 2,
        blendMode: 'ADD',
        frequency: 100,
      })
      emitter.startFollow(this)
      setTimeout(() => particles.destroy(true), 500)
    }, 500)
  }

  closeChest() {
    this.state = 'closed'
    this.anims.playReverse('chest-open', true)
  }
}
