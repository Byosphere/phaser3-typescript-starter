export class Loader extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: "Loader" });

    }

    preload(): void {
        let loader = this.add.sprite(0, this.game.canvas.height - 40, 'loader');
        let text = this.add.text(0, loader.y - (loader.height / 2), this.game.translate('loader.loading') + ' 0/100', { fontFamily: 'Pixel', fontSize: 20 });
        loader.x = this.game.canvas.width - text.width - 60;
        text.x = this.game.canvas.width - text.width - 30;

        this.anims.create({
            key: 'loading',
            frames: this.anims.generateFrameNumbers('loader', { start: 0, end: 3 }),
            frameRate: 15,
            repeat: -1
        });

        loader.play('loading');

        this.load.on('progress', (v) => {
            text.setText(this.game.translate('loader.loading') + ' ' + v * 100 + '/100');
        });

        this.load.on('complete', (v) => {
            loader.destroy();
            text.destroy();
        });

        this.loadAudio();
        this.loadImages();
        this.loadSpritesheets();
    }

    loadImages(): void {
        this.load.image('legumineux', 'legumineux.png');
        this.load.image('light', 'light.png');
    }

    loadSpritesheets(): void {

    }

    loadAudio() {

    }

    create(): void {
        let logo = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'legumineux');
        let light = this.add.image(this.game.canvas.width / 2, (this.game.canvas.height / 2) - 100, 'light');
        logo.alpha = 0;
        light.alpha = 0;
        this.tweens.add({
            targets: logo,
            alpha: { value: 1, duration: 1000, ease: 'Linear' },
            completeDelay: 2000,
            onComplete: () => {
                this.tweens.add({
                    targets: light,
                    alpha: { value: 1, duration: 500, ease: 'Linear' },
                    onComplete: () => {
                        this.tweens.add({
                            targets: light,
                            scaleX: { value: 30, duration: 1500, ease: 'Linear' },
                            scaleY: { value: 30, duration: 1500, ease: 'Linear' },
                            onComplete: () => {
                                this.cameras.main.fadeOut(500, 255, 255, 255);
                                this.cameras.main.on('camerafadeoutcomplete', () => {
                                    this.scene.start('TitleScene');
                                }, this);
                            }
                        });
                    }
                });
            }
        });
    }
}