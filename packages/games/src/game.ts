import Phaser from 'phaser'
import merge from 'lodash.merge'
import { DemoScene } from './scenes/demo-scene'
import { TestScene } from './scenes/test.scene'

declare module 'phaser' {
  interface Game {
    gameClient: GameClient
  }
}

export interface GameClientOptions {
  phaser: Phaser.Types.Core.GameConfig
}

export const gameClientDefaultConfig: GameClientOptions = {
  phaser: {
    type: Phaser.WEBGL,
    width: "100%",
    height: "100%",
    render: {
      antialias: false,
      pixelArt: true,
      roundPixels: false
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: [
      DemoScene,
      TestScene
    ]
  }
}

export class GameClient {
  phaser!: Phaser.Game
  config: GameClientOptions

  constructor(config: Partial<GameClientOptions>) {
    this.config = merge(gameClientDefaultConfig, config)
    this.createPhaser()
  }

  private createPhaser() {
    const p = new Phaser.Game(this.config.phaser)
    this.phaser = p

    // register main game engine instance to phaser
    Object.defineProperty(this.phaser, 'gameClient', {
      value: this,
      writable: false,
    })
  }

  destroy() {
    this.phaser.destroy(false, false)
  }

  restart() {
    this.destroy()
    console.clear()
    this.createPhaser()
  }

  stopAllScenes() {
    this.phaser.scene.getScenes().forEach((scene) => {
      const keep = (scene as any).KEEP_BACKGROUND
      if (keep) return
      scene.scene.stop()
    })
  }

  publicUrl(path: string) {
    return path
  }

  assetUrl(path: string) {
    return this.publicUrl(`assets/${path}`)
  }

  debug(...args: any[]) {
    console.log(`[DEBUG]`, ...args)
  }
}
