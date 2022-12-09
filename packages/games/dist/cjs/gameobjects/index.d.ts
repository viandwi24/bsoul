import { Chest } from './chest';
import { Door } from './door';
import { Enemy } from './enemy';
import { Key } from './key';
export * from './base';
export * from './chest';
export * from './door';
export * from './key';
export * from './player';
export declare const GameObjectClassContructor: {
    Door: typeof Door;
    Chest: typeof Chest;
    Key: typeof Key;
    Enemy: typeof Enemy;
};
