import Phaser from 'phaser';
import { Tilemap } from '../tilemap';
export interface TileDataObjectGroupObject {
    id: number;
    name: string;
    height: number;
    width: number;
    x: number;
    y: number;
    visible: boolean;
    rotation: number;
    rectangle?: boolean;
}
export interface TileDataObjectGroup {
    draworder: string;
    id: number;
    name: string;
    opacity: number;
    type: string;
    visible: boolean;
    x: number;
    y: number;
    objects: TileDataObjectGroupObject[];
}
export interface TileData {
    objectgroup: TileDataObjectGroup;
}
export declare const initColliderTiles: (scene: Phaser.Scene, map: Tilemap) => void;
export declare const getShapeColliderFromGameObjects: (scene: Phaser.Scene, tile: Phaser.Tilemaps.Tile) => Phaser.GameObjects.GameObject[];
