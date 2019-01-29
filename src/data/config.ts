import 'phaser'
import { Loader } from '../scenes/Loader';

export default {
    title: "phaser3-starter",
    url: "http://phaser.io",
    version: "0.0.1",
    width: 1024,
    height: 768,
    parent: 'game',
    type: Phaser.AUTO,
    loader: {
        baseURL: 'assets'
    },
    input: {
        gamepad: true
    },
    backgroundColor: '#000000',
    disableContextMenu: true,
    renderConfig: {
        antialias: true,
        pixelArt: true,
        roundPixel: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Loader]
}