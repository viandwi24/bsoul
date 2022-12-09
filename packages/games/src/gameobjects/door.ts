import { GameObjectBase, GameObjectType } from "./base"

export class Door extends GameObjectBase {
  state: 'closed' | 'open' = 'closed'
  firstState: 'closed' | 'open' = 'closed'
  frames: number[] = []

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Door
  }

  onObjectDataSetted(): void {
    this.state = this.getDataProperty('state', 'closed') as 'closed' | 'open'
    this.firstState = this.state
    this.frames = this.getDataProperty('frames', []) as number[]

    // set anim
    this.anims.create({
      key: 'door-close',
      frameRate: 4,
      repeat: 0,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })).reverse(),
      ],
    })
    this.anims.create({
      key: 'door-open',
      frameRate: 4,
      repeat: 0,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })),
      ],
    })

    // red
    // if (this.state === 'closed') this.setTint(0xff0000)
    // if (this.state === 'open') this.setTint(0x00ff00)
    // console.log('door', this.objectData)
    if (this.state === 'open') this.openDoor(true)
    if (this.state === 'closed') this.closeDoor(false)
  }

  isClosed() {
    return this.state === 'closed'
  }

  openDoor(withAnim = true) {
    this.state = 'open'
    if (withAnim) this.anims.play('door-open', true)
  }

  closeDoor(withAnim = true) {
    this.state = 'closed'
    if (withAnim) this.anims.play('door-close', true)

    // create collider
    const rectCollider = this.scene.add.rectangle(this.x, this.y, this.width, this.height)
    const fillColor: any|undefined = this.scene.game.gameClient.phaser.config.physics.arcade?.debug ? 0xff0000 : undefined
    rectCollider.setFillStyle(fillColor, 0.5)
    rectCollider.setOrigin(0.5)
    rectCollider.setDepth(9999)
    this.map.colliders.push(rectCollider)
  }

  update(): void {
    if (!this.isClosed() || this.firstState === 'open') return
  }
}
