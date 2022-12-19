import Phaser from 'phaser'
import { useEffect, useState } from 'react'
import { Player } from '../gameobjects/player'
import { Tilemap } from '../map/tilemap'
import { createReactUi } from '../utils/ui'

export function PreloadSceneUI({ scene }: { scene: TestScene }) {
  const [signature] = useState(Math.random().toString(36).substring(7))
  const [phaserobjects, setPhaserobjects] = useState<Phaser.GameObjects.GameObject[]>([])

  useEffect(() => {
    const anim = setInterval(() => {
      const phaserobjects = scene.children.list
      setPhaserobjects(phaserobjects)
    }, 100)
    return () => {
      clearInterval(anim)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lvlselector = () => {
    scene.game.gameClient.stopAllScenes()
    scene.scene.launch('LevelSelectorScene')
  }

  return (
    <div
      // to styles
      style={{
        top: 0,
        right: 0,
        zIndex: 10,
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
      }}
    >
      <div>BSOUL v0.0.1 (Demo vers. {signature})
        <button onClick={() => scene.game.gameClient.restart()}>Restart</button> |
        <button onClick={() => lvlselector()}>Level Selector</button>
      </div>
    </div>
  )
}

export class TestScene extends Phaser.Scene {
  map!: Tilemap
  player!: Player
  mapUrl: string = ''

  constructor() {
    super({
      key: 'TestScene'
    })
  }

  init(data: { mapUrl: string }) {
    this.mapUrl = data.mapUrl || this.game.gameClient.assetUrl(`maps/test.json?${Math.random()}`)
    console.log('TestScene init', this.mapUrl)
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.destroy.bind(this))
    createReactUi(this, <PreloadSceneUI scene={this} />).render()
  }

  preload() {
    // load assets

    // load chars
    // const charUrl = this.game.gameClient.assetUrl('chars/femalestaffdark_yellow.png')
    // this.load.spritesheet('char', charUrl, { frameWidth: 32, frameHeight: 32 })

    // load chars
    this.load.atlas(
      'chars',
      this.game.gameClient.assetUrl('chars/chars.png'),
      this.game.gameClient.assetUrl('chars/chars.json')
    )

    // load particles
    this.load.atlas(
      'particles',
      this.game.gameClient.assetUrl('particles/particles.png'),
      this.game.gameClient.assetUrl('particles/particles.json')
    )

    // load weapons
    this.load.atlas(
      'weapons',
      this.game.gameClient.assetUrl('sprites/weapons.png'),
      this.game.gameClient.assetUrl('sprites/weapons.json')
    )

    // preload and init map
    this.map = new Tilemap(this, 'tilemap_base' + Math.random(), this.mapUrl)
  }

  create() {
    // init map
    this.map.create()

    // player
    this.player = new Player(this, this.map)
    this.player.createController()
    this.map.gameobjects.push(this.player)

    // camera
    this.cameras.main.startFollow(this.player)
    this.cameras.main.setZoom(6)

    // objects
    // const obj = this.add.sprite(100, 100, 'item_dungeon_chest_16')
    // obj.setDepth(99999)
    // obj.anims.create({
    //   key: 'open',
    //   frames: [0, 1, 2].map((i) => ({ key: 'item_dungeon_chest_16', frame: i })),
    // })
    // obj.anims.play('open', true)

    // test create text in center of screen
    const text = this.add.text(0, 0, 'Hello Phaser!', {
      fontSize: '64px',
      color: '#ffffff',
    })
    text.setOrigin(0.5, 0.5)
    text.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2)

    // on pointer move display pointer position localion
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      text.setText(`Hello, Welcome to BSOUL! ${pointer.x}, ${pointer.y}`)
    })
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      const tile = this.map.map.getTileAtWorldXY(pointer.worldX, pointer.worldY, false, undefined, 'Decoration_bottom')
      console.log('pointerdown', pointer, tile)
    })
  }

  destroy() {
    this.player?.destroy()
    this.map?.destroy()
    console.log('TestScene destroy')
  }
}
