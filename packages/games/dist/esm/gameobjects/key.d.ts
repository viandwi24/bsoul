import { GameObjectBase } from "./base";
export declare class Key extends GameObjectBase {
    state: 'closed' | 'open';
    frames: number[];
    isCollected: boolean;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number);
    onObjectDataSetted(): void;
    collect(player: Phaser.Physics.Arcade.Body): void;
}
