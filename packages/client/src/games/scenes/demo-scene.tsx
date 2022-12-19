import Phaser from 'phaser'
import { useEffect, useState } from 'react'
import { createReactUi } from '../utils/ui'

export function PreloadSceneUI({ scene }: { scene: DemoScene }) {
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
      <div>BSOUL v0.0.1 (Demo vers. {signature}) <button onClick={() => scene.game.gameClient.restart()}>Restart</button></div>
    </div>
  )
}

export class DemoScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'DemoScene'
    })
  }

  preload() {
    // create react ui
    createReactUi(this, <PreloadSceneUI scene={this} />).render()
  }

  create() {
    this.scene.launch('TestScene')
  }
}
