import { Tilemap } from "../map/tilemap";
export declare enum GameObjectType {
    Door = "Door",
    Chest = "Chest",
    Key = "Key",
    Sprite = "Sprite",
    Player = "Player",
    Enemy = "Enemy"
}
export declare class GameObjectBase extends Phaser.Physics.Arcade.Sprite {
    gameObjectType: GameObjectType;
    objectData: any;
    map: Tilemap;
    enableDepthSort: boolean;
    indicatorNameTxt: Phaser.GameObjects.Text;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number);
    setObjectData(data: any, map: Tilemap): void;
    onObjectDataSetted(_: {}): void;
    getDataProperty(key: string, defaultValue?: any): any;
    calculateSortDepthPoint(): {
        x: number;
        y: number;
    };
    preUpdate(time: number, delta: number): void;
    update(time: number, delta: number): void;
    postUpdate(time: number, delta: number): void;
    destroy(fromScene?: boolean): void;
}
