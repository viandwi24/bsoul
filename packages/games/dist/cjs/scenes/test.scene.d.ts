import Phaser from 'phaser';
import { Tilemap } from '../map/tilemap';
export declare class TestScene extends Phaser.Scene {
    map: Tilemap;
    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    constructor();
    preload(): void;
    create(): void;
}
