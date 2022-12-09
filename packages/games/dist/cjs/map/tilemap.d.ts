import Phaser from 'phaser';
import { GameObjectBase } from '../gameobjects/base';
export interface TilemapConfig {
    depthStart: number;
    depthBetweenLayers: number;
}
export declare const TilemapDefaultConfig: TilemapConfig;
export declare class Tilemap {
    scene: Phaser.Scene;
    key: string;
    data: any;
    map: Phaser.Tilemaps.Tilemap;
    tilesets: Phaser.Tilemaps.Tileset[];
    layers: Phaser.Tilemaps.TilemapLayer[];
    config: TilemapConfig;
    isCreated: boolean;
    gameobjects: GameObjectBase[];
    gameobjects_groups: Phaser.Physics.Arcade.StaticGroup[];
    object_resortables: Phaser.GameObjects.GameObject[];
    colliders: Phaser.GameObjects.GameObject[];
    constructor(scene: Phaser.Scene, key: string, url: string);
    preload(): void;
    create(): void;
    preUpdate(time: number, delta: number): void;
    update(time: number, delta: number): void;
    postUpdate(time: number, delta: number): void;
    sortDepthLayers(): void;
    /**
     * Get layer by name
     * @param name
    */
    getLayerByName(name: string): Phaser.Tilemaps.TilemapLayer;
    getObjInLayer(layerName: string, objName: string): Phaser.Types.Tilemaps.TiledObject;
    addObjectFromTiled(group: Phaser.Physics.Arcade.StaticGroup, object: Phaser.Types.Tilemaps.TiledObject, key: string, objectData: any): any;
    getTilesetFromGid(gid: number): Phaser.Tilemaps.Tileset;
}
