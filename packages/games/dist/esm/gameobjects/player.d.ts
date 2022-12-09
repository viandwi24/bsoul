import Phaser from 'phaser';
import { Tilemap } from "../map/tilemap";
import { GameObjectBase, GameObjectType } from "./base";
export declare class Player extends GameObjectBase {
    map: Tilemap;
    playerSprite: Phaser.GameObjects.Sprite;
    cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    controllerIsCreated: boolean;
    playerSpriteDirection: 'left' | 'right';
    axis: {
        x: number;
        y: number;
    };
    gameObjectType: GameObjectType;
    keyCollected: number;
    keyTotal: number;
    outDoorIsOpen: boolean;
    constructor(scene: Phaser.Scene, map: Tilemap);
    preUpdate(): void;
    postUpdate(): void;
    collideProcess(): void;
    syncAllChild(): void;
    createController(): void;
    private controllerUpdate;
    private interactionUpdate;
}
