import Phaser from "phaser"
import { TestScene } from "./test.scene"

export class HudScene extends Phaser.Scene {
  mainScene!: TestScene
  hudKeyText!: Phaser.GameObjects.Text

  constructor() {
    super({
      key: 'HudScene'
    })
  }

  init(data: { mainScene: Phaser.Scene }) {
    this.mainScene = data.mainScene as TestScene
  }

  create() {
    const hudKeyText = this.add.text(10, 10, 'Collected Key: 0/0', {
      color: '#ffffff',
      fontSize: '32px'
    })
    this.hudKeyText = hudKeyText
  }

  update(time: number, delta: number): void {
    if (this.mainScene.player) {
      this.hudKeyText.setText(`Collected Key: ${this.mainScene.player.keyCollected}/${this.mainScene.player.keyTotal}`)
    }
  }
}
