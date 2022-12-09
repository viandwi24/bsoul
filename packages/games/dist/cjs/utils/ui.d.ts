/// <reference types="@types/react" />
import React from 'react';
export declare function GameScreenUI(props: {
    children: React.ReactNode;
}): JSX.Element;
export interface ReactUi {
    render: () => void;
    destroy: () => void;
}
export declare function createReactUi(scene: Phaser.Scene, element: JSX.Element): {
    render: () => void;
    destroy: () => void;
};
export declare function GameButtonUi({ children, text, onClick }: {
    children?: React.ReactNode;
    text?: string;
    onClick?: () => void;
}): JSX.Element;
