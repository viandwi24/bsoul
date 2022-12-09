import Phaser from 'phaser';
export interface TileDataAnimation {
    duration: number;
    tileid: number;
}
export interface TileData {
    animation?: TileDataAnimation[];
}
export declare const initAnimatedTiles: (scene: Phaser.Scene, map: Phaser.Tilemaps.Tilemap) => void;
