import Phaser from 'phaser'
import { Tilemap } from "../map/tilemap";
import { GameObjectBase, GameObjectType } from "./base"
import { Chest } from './chest';
import { Door } from './door';
import { Key } from './key';
import { Trap } from './trap';

export class Player extends GameObjectBase {
  playerSprite: Phaser.GameObjects.Sprite
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  controllerIsCreated = false
  playerSpriteDirection: 'left' | 'right' = 'right'
  axis: { x: number, y: number } = { x: 0, y: 0 }
  gameObjectType = GameObjectType.Player

  keyCollected = 0
  keyTotal = 0
  outDoorIsOpen = false
  currentWeapon: 'sword' = 'sword'
  weaponSprite?: Phaser.GameObjects.Sprite

  constructor(scene: Phaser.Scene, public map: Tilemap) {
    // const texture = 'char'
    super(scene, 100, 100, 'chars', 'shadow.png')
    this.setTexture('chars', 'shadow.png')

    // set this
    this.setInteractive()
    scene.physics.add.existing(this)
    this.setDisplaySize(8, 4)

    // set
    const player = scene.add.sprite(this.x, this.y, 'chars')
    player.setSize(32, 32)
    player.setScale(0.5)
    player.setOrigin(0)
    player.setDepth(this.depth)
    this.playerSprite = player

    // create animations
    player.anims.create({
      key: 'idle',
      frameRate: 5,
      repeat: -1,
      frames: player.anims.generateFrameNames('chars', {
        prefix: 'kobo_kanaeru/idle/0',
        start: 1,
        end: 9,
        suffix: '.png',
      }),
    })
    player.anims.create({
      key: 'walk',
      frameRate: 6,
      repeat: -1,
      frames: player.anims.generateFrameNames('chars', {
        prefix: 'kobo_kanaeru/walk/0',
        start: 1,
        end: 4,
        suffix: '.png',
      }),
    })

    // default anims
    player.play('idle', true)

    // world
    scene.physics.world.bounds.width = map.map.widthInPixels
    scene.physics.world.bounds.height = map.map.heightInPixels
    this.setCollideWorldBounds(true)

    // colliders
    scene.physics.add.collider(
      this,
      map.layers
    )

    // get spawner
    const spawner = map.getObjInLayer('Spawner_obj', 'spawner_player')
    if (spawner) {
      this.setPosition(spawner.x || 0 + (spawner.width || 0) / 2, spawner.y || 0 + (spawner.height || 0) / 2)
    }

    // get key total
    this.keyTotal = map.gameobjects.filter(g => g.gameObjectType === GameObjectType.Key).length

    // laod weapons
    this.loadWeapon()
  }

  loadWeapon() {
    const weapon = this.scene.add.sprite(this.x, this.y, 'weapons', 'Sword.png')
    weapon.setOrigin(0)
    weapon.setDepth(this.depth)
    weapon.setDisplaySize(8, 8)
    this.weaponSprite = weapon
  }

  preUpdate() {
    if (!this.playerSprite) return
    this.collideProcess()
    if (this.controllerIsCreated) this.controllerUpdate()
  }

  postUpdate() {
    if (!this.playerSprite) return
    if (this.controllerIsCreated) this.interactionUpdate()
    this.syncAllChild()
  }

  destroy() {
    super.destroy(true)
    this.playerSprite.destroy(true)
  }

  collideProcess() {
    this.scene.physics.add.collider(
      this,
      this.map.colliders
    )
    // const collideCallback = (obj1: Phaser.Types.Physics.Arcade.GameObjectWithBody|Phaser.Tilemaps.Tile, obj2: Phaser.Types.Physics.Arcade.GameObjectWithBody|Phaser.Tilemaps.Tile) => {
    //   console.log('collide', obj1, obj2)
    // }
    // const checkCollides = [
    //   // this.scene.physics.overlap(this, this.map.layers),
    //   // this.scene.physics.overlap(this, this.map.colliders),
    //   this.scene.physics.collide(this, this.map.colliders, collideCallback)
    // ]
    // // if have collides, stop player
    // if (checkCollides.some((v) => v)) {
    //   this.setVelocity(0)
    // }
  }

  syncAllChild() {
    // axis
    const { axis } = this

    // body sprite
    this.playerSprite.setPosition(this.x - this.playerSprite.displayWidth / 2, this.y - this.playerSprite.displayHeight + this.playerSprite.displayHeight / 10)
    this.playerSprite.setDepth(this.depth)
    this.playerSpriteDirection = axis.x === 0 ? this.playerSpriteDirection : axis.x === 1 ? 'right' : 'left'
    this.playerSprite.setFlipX(this.playerSpriteDirection === 'left')

    // apply direction weapon
    if (this.weaponSprite) {
      this.weaponSprite.setDepth(this.depth)
      this.weaponSprite.setFlipX(this.playerSpriteDirection !== 'left')
      if (this.playerSpriteDirection === 'right') {
        this.weaponSprite.setPosition(
          this.x - this.weaponSprite.displayWidth / 2 + this.weaponSprite.displayWidth / 1.8,
          this.y - this.weaponSprite.displayHeight,
        )
      } else {
        this.weaponSprite.setPosition(
          this.x - this.weaponSprite.displayWidth / 2 - this.weaponSprite.displayWidth / 1.8,
          this.y - this.weaponSprite.displayHeight,
        )
      }
    }
  }

  createController() {
    if (this.controllerIsCreated) return

    // create cursors
    this.cursors = this.scene.input.keyboard!.createCursorKeys()

    //
    this.controllerIsCreated = true
  }

  private controllerUpdate() {
    const normalSpeed = 80
    const diagonalSpeed = 56
    const axis = {
      x: 0,
      y: 0,
    }
    this.setVelocity(0)

    // colliders
    // let isCollideWith: Phaser.Tilemaps.Tile | Phaser.Types.Physics.Arcade.GameObjectWithBody|undefined
    // const isCollide = this.scene.physics.collide(this, this.map.colliders, (_, obj2) => isCollideWith = obj2)
    // if (isCollide) console.log('isCollide', isCollide, isCollideWith)

    if (this.cursors?.left.isDown) {
      axis.x = -1
    } else if (this.cursors?.right.isDown) {
      axis.x = 1
    }

    if (this.cursors?.up.isDown) {
      axis.y = -1
    } else if (this.cursors?.down.isDown) {
      axis.y = 1
    }

    // // deny axis if collide
    // if (isCollide && isCollideWith) {
    //   const colliderX = (isCollideWith as any)?.x || 0
    //   const colliderY = (isCollideWith as any)?.y || 0
    //   const colliderWidth = (isCollideWith as any)?.width || 0
    //   const colliderHeight = (isCollideWith as any)?.height || 0
    //   if (axis.x === -1) {
    //     if (colliderX + colliderWidth > this.x) {
    //       axis.x = 0
    //     }
    //   } else if (axis.x === 1) {
    //     if (colliderX < this.x) {
    //       axis.x = 0
    //     }
    //   }
    //   if (axis.y === -1) {
    //     if (colliderY + colliderHeight * 2 > this.y) {
    //       axis.y = 0
    //     }
    //   } else if (axis.y === 1) {
    //     if (colliderY < this.y) {
    //       axis.y = 0
    //     }
    //   }
    // }

    // apply animation
    if (axis.x !== this.axis.x || axis.y !== this.axis.y) {
      this.playerSprite.play('walk', true)
    } else if (axis.x === 0 && axis.y === 0) {
      this.playerSprite.play('idle', true)
    }
    this.axis = axis

    // apply speed
    if (axis.x !== 0 && axis.y !== 0) {
      this.setVelocityX(axis.x * diagonalSpeed)
      this.setVelocityY(axis.y * diagonalSpeed)
    } else {
      this.setVelocityX(axis.x * normalSpeed)
      this.setVelocityY(axis.y * normalSpeed)
    }
  }

  private interactionUpdate() {
    const tileSize = {
      width: this.map.map.tileWidth,
      height: this.map.map.tileHeight,
    }

    // item::chest::check
    const chests = this.map.gameobjects
      .filter(g => g.gameObjectType === GameObjectType.Chest)
      .filter(g => (g.x >= this.x - (tileSize.width / 2) && g.x <= this.x + (tileSize.width / 2)) && (g.y >= this.y - (tileSize.height / 2) && g.y <= this.y + (tileSize.height / 2))) as Chest[]
    // item::chest::collect
    for (const chest of chests) {
      if (chest.isClosed()) chest.openChest()
    }

    // item::key::check
    const keys = this.map.gameobjects
      .filter(g => g.gameObjectType === GameObjectType.Key)
      .filter(g => (g.x >= this.x - tileSize.width && g.x <= this.x + tileSize.width) && (g.y >= this.y - tileSize.height && g.y <= this.y + tileSize.height)) as Key[]
    // item::key::collect
    for (const key of keys) {
      if (!key.isCollected) {
        key.collect(this.playerSprite as any)
        this.keyCollected += 1
      }
    }

    // interact::door::check
    // get door closed
    const closedDoor = (this.map.gameobjects
      .filter(g => g.gameObjectType === GameObjectType.Door) as Door[])
      .find(g => g.firstState === 'closed')
    // console.log('closedDoor', closedDoor)
    if (closedDoor && !this.outDoorIsOpen) {
      const areaOverlapWidth = closedDoor.width
      const areaOverlapHeight = closedDoor.height
      const areaOverlapX = closedDoor.x - areaOverlapWidth / 2
      const areaOverlapY = closedDoor.y - areaOverlapHeight / 2 + (areaOverlapHeight / 3)
      const isOverlap = (this.x >= areaOverlapX && this.x <= areaOverlapX + areaOverlapWidth) && (this.y >= areaOverlapY && this.y <= areaOverlapY + areaOverlapHeight)
      if (isOverlap) {
        // if all key collected
        if (this.keyTotal === this.keyCollected) {
          this.outDoorIsOpen = true
          closedDoor.openDoor()
        } else {
          console.log('need key', this.keyTotal, this.keyCollected)
        }
        // closedDoor.openDoor()
        // this.scene.scene.restart()
      }
    } else if (closedDoor && this.outDoorIsOpen) {
      const areaOverlapWidth = closedDoor.width
      const areaOverlapHeight = closedDoor.height
      const areaOverlapX = closedDoor.x - areaOverlapWidth / 2
      const areaOverlapY = closedDoor.y - areaOverlapHeight / 2
      const isOverlap = (this.x >= areaOverlapX && this.x <= areaOverlapX + areaOverlapWidth) && (this.y >= areaOverlapY && this.y <= areaOverlapY + areaOverlapHeight)
      if (isOverlap) {
        try {
          this.scene.game.gameClient.stopAllScenes()
          this.scene.scene.launch('LevelSelectorScene')
        } catch (error) {

        }
      }
    }

    // interact::trap::check
    // get trap closed
    const closedDoors = (this.map.gameobjects
      .filter(g => g.gameObjectType === GameObjectType.Trap) as Trap[])
      .filter(g => g.state === 'closed')
      .filter(g => (g.x >= this.x - (tileSize.width / 2) && g.x <= this.x + (tileSize.width / 2)) && (g.y >= this.y - (tileSize.height / 2) && g.y <= this.y + (tileSize.height / 2))) as Trap[]
    if (closedDoors.length > 0) {
      this.makeGameover()
    }
  }

  makeGameover() {
    this.scene.game.gameClient.stopAllScenes()
    this.scene.scene.launch(this.scene)
  }
}
