import Phaser from "phaser"
import { GameObjectBase, GameObjectType } from "./base"

export class Trap extends GameObjectBase {
  state: 'closed' | 'open' = 'closed'
  frames: number[] = []
  delay: number = 1000
  enableDepthSort = false

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Trap
  }

  onObjectDataSetted(): void {
    this.state = this.getDataProperty('state', 'closed') as 'closed' | 'open'
    this.frames = this.getDataProperty('frames', []) as number[]
    this.delay = this.getDataProperty('delay', 0) as number

    // create animation
    this.anims.create({
      key: 'trap-closed',
      frameRate: 4,
      repeat: 0,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })),
      ],
    })
    this.anims.create({
      key: 'trap-open',
      frameRate: 4,
      repeat: 0,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })).reverse(),
      ],
    })

    this.runInterval()
  }

  update(_time: number, _delta: number) {
    // if (this.state === 'closed')
  }

  runInterval() {
    if (this.state === 'closed') {
      this.once('animationcomplete', () => {
        this.state = 'open'
      })
      this.anims.play('trap-open')
    } else {
      this.once('animationcomplete', () => {
        this.state = 'closed'
      })
      this.anims.play('trap-closed')
    }
    setTimeout(() => {
      this.runInterval()
    }, this.delay)
  }

  isClosed() {
    return this.state === 'closed'
  }
}
