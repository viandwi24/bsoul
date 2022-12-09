import Phaser from 'phaser';
declare module 'phaser' {
    interface Game {
        gameClient: GameClient;
    }
}
export interface GameClientOptions {
    phaser: Phaser.Types.Core.GameConfig;
}
export declare const gameClientDefaultConfig: GameClientOptions;
export declare class GameClient {
    phaser: Phaser.Game;
    config: GameClientOptions;
    constructor(config: Partial<GameClientOptions>);
    private createPhaser;
    destroy(): void;
    restart(): void;
    stopAllScenes(): void;
    publicUrl(path: string): string;
    assetUrl(path: string): string;
    debug(...args: any[]): void;
}
