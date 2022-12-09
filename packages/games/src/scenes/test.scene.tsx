import Phaser from 'phaser'
import { Player } from '../gameobjects/player'
import { Tilemap } from '../map/tilemap'

export class TestScene extends Phaser.Scene {
  map!: Tilemap
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

  constructor() {
    super({
      key: 'TestScene'
    })
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

    // preload and init map
    const mapUrl = this.game.gameClient.assetUrl(`maps/test.json?${Math.random()}`)
    this.map = new Tilemap(this, 'tilemap_base' + Math.random(), mapUrl)
  }

  create() {
    // init map
    this.map.create()

    // player
    const player = new Player(this, this.map)
    player.createController()
    this.map.gameobjects.push(player)

    // camera
    this.cameras.main.startFollow(player)
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
}
