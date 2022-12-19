import React, { useEffect } from 'react'
// import { GameClient } from '@bsoul/games'
import { GameClient } from '../'

export interface UseCreateGameProps {
  canvas: React.RefObject<HTMLCanvasElement>
}

export function useCreateGame({ canvas }: UseCreateGameProps) {
  let game!: GameClient

  useEffect(() => {
    if (!canvas.current || !(canvas.current instanceof HTMLCanvasElement)) return
    if (typeof game !== 'undefined') {
      try {
        game.destroy()
        ;(game as any) = undefined
        console.clear()
      } catch (error) {}
    }
    const g = new GameClient({
      phaser: {
        canvas: canvas.current,
        parent: canvas.current.parentElement as HTMLElement,
        scale: {
          mode: Phaser.Scale.RESIZE,
          width: canvas.current.parentElement?.clientWidth || 0,
          height: canvas.current.parentElement?.clientHeight || 0,
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    game = g
    return () => {
      game.destroy()
    }
  }, [])

  return {
    game,
  }
}
