import Phaser from 'phaser'
import { useEffect, useMemo } from 'react'
import { createReactUi } from '../utils/ui'

export function LevelSelectorUI({ scene }: { scene: Phaser.Scene }) {
  const levelScenes = useMemo(() => {
    return [
      '1-1',
      '1-2'
    ]
  }, [])

  const startLevel = (levelScene: string) => {
    scene.game.gameClient.stopAllScenes()
    scene.scene.launch('TestScene', { mapUrl: scene.game.gameClient.assetUrl(`maps/levels/${levelScene}.json?${Math.random()}`) })
  }

  useEffect(() => {
    setTimeout(() => startLevel('1-1'), 500)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-30 flex w-screen h-screen bg-slate-900 text-gray-100">
      <div className="relative flex-1 flex flex-col py-10 px-10 max-w-screen-lg mx-auto space-y-10">
        <div className="font-bold text-3xl text-center">Select Level</div>
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {levelScenes.map((levelScene) => (
              <div
                key={levelScene}
                className="flex items-center justify-center h-20 text-2xl text-white bg-slate-800 hover:bg-slate-700 cursor-pointer"
                onClick={() => startLevel(levelScene)}
              >
                {levelScene}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export class LevelSelectorScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'LevelSelectorScene'
    })
  }

  init() {
    createReactUi(this, <LevelSelectorUI scene={this} />).render()
  }

  create() {
  }
}
