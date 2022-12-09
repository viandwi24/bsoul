import { GameObjectBase, GameObjectType } from "./base"

export class Key extends GameObjectBase {
  state: 'closed' | 'open' = 'closed'
  frames: number[] = []
  isCollected: boolean = false

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Key
  }

  onObjectDataSetted(): void {
    this.frames = this.getDataProperty('frames', []) as number[]

    // set anim
    this.anims.create({
      key: 'normal',
      frameRate: 6,
      repeat: -1,
      frames: [
        ...this.frames.map((f) => ({ key: this.texture.key, frame: f })),
      ],
    })
    this.anims.play('normal', true)
  }

  collect(player: Phaser.Physics.Arcade.Body) {
    if (this.isCollected) return
    this.isCollected = true
    // animate "taking object" - scale down, fade out, destroy
    this.scene.tweens.add({
      targets: this,
      scaleX: 1.5,
      scaleY: 1.5,
      duration: 250,
      ease: 'Power2',
      onComplete: () => {
        const collectedFxSprite = this.scene.add.sprite(this.x, this.y, 'particles')
        collectedFxSprite.setScale(0.5)
        collectedFxSprite.setDepth(this.depth)
        collectedFxSprite.setOrigin(0.5)
        collectedFxSprite.anims.create({
          key: 'collected',
          frameRate: 14,
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
        })
        collectedFxSprite.anims.play('collected', true)
        this.scene.tweens.add({
          targets: this,
          scaleX: 0.3,
          scaleY: 0.3,
          x: player.x + player.width / 4,
          y: player.y + player.height / 4,
          alpha: 0.2,
          duration: 500,
          ease: 'Power2',
          onComplete: () => {
            this.destroy(true)
          }
        })
      }
    })
  }
}
