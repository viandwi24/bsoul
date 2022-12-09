import { GameObjectBase } from "./base";
export declare class Door extends GameObjectBase {
    state: 'closed' | 'open';
    firstState: 'closed' | 'open';
    frames: number[];
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number);
    onObjectDataSetted(): void;
    isClosed(): boolean;
    openDoor(withAnim?: boolean): void;
    closeDoor(withAnim?: boolean): void;
    update(): void;
}
