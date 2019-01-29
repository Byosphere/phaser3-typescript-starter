export class Booter extends Phaser.Scene {

    constructor() {
        super({ key: "Booter" });
    }

    preload(): void {
        this.load.spritesheet('loader', 'loader.png', { frameWidth: 32, frameHeight: 32 });
    }

    create(): void {
        this.scene.start('Loader');
    }
}