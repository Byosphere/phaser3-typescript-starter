import { getNavigatorLanguage } from "./../utils/helpers";
export class Booter extends Phaser.Scene {

    constructor() {
        super({ key: "Booter" });
    }

    preload(): void {
        this.load.spritesheet('loader', 'loader.png', { frameWidth: 32, frameHeight: 32 });

        this.load.json('fr', 'lang/fr.json');
        this.load.json('en', 'lang/en.json');
        //this.load.json('ch', 'lang/ch.json');
    }

    create(): void {
        this.scene.start('Loader');
    }
}