import { GameObjectBase } from './base'
import { Chest } from './chest'
import { Door } from './door'
import { Enemy } from './enemy'
import { Key } from './key'

export * from './base'
export * from './chest'
export * from './door'
export * from './key'
export * from './player'

export const GameObjectClassContructor: {
  [key: string]: typeof GameObjectBase
} = {
  'Door': Door,
  'Chest': Chest,
  'Key': Key,
  'Enemy': Enemy,
}
