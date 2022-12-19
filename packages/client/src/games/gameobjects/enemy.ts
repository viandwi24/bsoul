import Phaser from "phaser"
import { GameObjectBase, GameObjectType } from "./base"
import { Player } from './player'

export enum EnemyType {
  Mage = "mage",
}

export class Enemy extends GameObjectBase {
  state: 'idle' | 'walk' | 'wander' | 'attack' = 'idle'
  enemyType: EnemyType = EnemyType.Mage
  enemyBody!: Phaser.GameObjects.Sprite
  circleRadiusAttack!: Phaser.GameObjects.Arc

  shootsObjs: Phaser.GameObjects.Arc[] = []
  lastAttackTime: number = 0

  options = {
    // delay attack in ms
    fireOfRate: 500,
    fireLifeTime: 3000,
  }

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
    this.gameObjectType = GameObjectType.Enemy
    this.setVisible(false)
  }

  onObjectDataSetted(_: {}): void {
    const enemyTypeStr = this.getDataProperty('type', 'Mage') as string
    if (enemyTypeStr === 'Mage') this.enemyType = EnemyType.Mage

    // if mage
    if (this.enemyType === EnemyType.Mage) {
      // this.enemyBody = this.scene.add.rectangle(0, 0, 16, 16, 0xff0000)
      // this.enemyBody = scene.addenemies
      const body = this.scene.add.sprite(this.x, this.y, 'enemies')
      body.setOrigin(0.5, 0.5)
      body.setDisplaySize(8, 16)
      body.setDepth(99999)

      // anims
      body.anims.create({
        key: 'enemy-idle',
        frames: this.scene.anims.generateFrameNames('enemies', {
          prefix: 'mage/idle/',
          start: 1,
          end: 2,
          zeroPad: 2,
          suffix: '.png',
        }),
        frameRate: 4,
        repeat: -1,
      })
      body.anims.create({
        key: 'enemy-walk',
        frames: this.scene.anims.generateFrameNames('enemies', {
          prefix: 'mage/walk/',
          start: 1,
          end: 2,
          zeroPad: 2,
          suffix: '.png',
        }),
        frameRate: 4,
        repeat: -1,
      })

      //
      body.play('enemy-idle', true)
      this.enemyBody = body
    }

    this.circleRadiusAttack = this.scene.add.circle(this.x, this.y, 64)
    // this.circleRadiusAttack.setStrokeStyle(1, 0xff0000)
  }


  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    this.enemyBody.setPosition(this.x, this.y)
    this.enemyBody.setDepth(this.depth)
    this.circleRadiusAttack.setPosition(this.x, this.y)
    this.circleRadiusAttack.setDepth(99999)

    // check player
    let playerInRangeAttack = false
    const { player } = this.scene as any
    if (player && this.circleRadiusAttack.getBounds().contains(player.x, player.y)) {
      playerInRangeAttack = true
    }

    this.state = playerInRangeAttack ? 'attack' : 'idle'
    if (playerInRangeAttack) {
      // attack player
      this.handlePlayerInRangeAttack(player)
    }
  }

  handlePlayerInRangeAttack(player: Player) {
    if (this.state !== 'attack') return

    // if mage
    if (this.enemyType === EnemyType.Mage) {
      // flip body if player in left player.x < this.x
      this.enemyBody.setFlipX(player.x < this.x)

      // shoot fireball
      const shoot = () => {
        console.log('shoot fireball')
        this.lastAttackTime = Date.now()
        const fireball = this.scene.add.circle(this.x, this.y, 1)
        fireball.setStrokeStyle(1, 0xff0000)
        fireball.setDepth(99999)


        // make fireball move to player
        this.scene.tweens.add({
          targets: fireball,
          x: player.x,
          y: player.y,
          duration: 1000,
          ease: 'Linear',
          onComplete: () => {
            // handle fireball hit player
            if (player.getBounds().contains(fireball.x, fireball.y)) {
              player.makeGameover()
            }
            fireball.destroy()
          },
        })

        this.shootsObjs.push(fireball)
      }

      if (Date.now() - this.lastAttackTime > this.options.fireOfRate) {
        shoot()
      }
    }
  }
}
