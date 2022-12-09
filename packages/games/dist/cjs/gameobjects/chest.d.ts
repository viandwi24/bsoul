import Phaser from "phaser";
import { GameObjectBase } from "./base";
export declare class Chest extends GameObjectBase {
    state: 'closed' | 'open';
    frames: number[];
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number);
    onObjectDataSetted(): void;
    update(_time: number, _delta: number): void;
    isClosed(): boolean;
    openChest(): void;
    closeChest(): void;
}
