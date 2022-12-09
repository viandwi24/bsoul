/// <reference types="@types/react" />
import Phaser from 'phaser';
export declare function PreloadSceneUI({ scene }: {
    scene: DemoScene;
}): JSX.Element;
export declare class DemoScene extends Phaser.Scene {
    constructor();
    preload(): void;
    create(): void;
}
