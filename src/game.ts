import "phaser";
import config from "./data/config";

export default class Game extends Phaser.Game {

    constructor(config: GameConfig) {
        super(config);
    }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    var game = new Game(config);
});