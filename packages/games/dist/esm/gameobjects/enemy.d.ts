import Phaser from "phaser";
import { GameObjectBase } from "./base";
export declare enum EnemyType {
    Mage = "mage"
}
export declare class Enemy extends GameObjectBase {
    state: 'idle' | 'walk' | 'wander' | 'attack';
    enemyType: EnemyType;
    enemyBody: Phaser.GameObjects.Rectangle;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number);
    onObjectDataSetted(_: {}): void;
    preUpdate(time: number, delta: number): void;
}
