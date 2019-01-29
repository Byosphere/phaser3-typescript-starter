import { ControlsInterface } from "./../utils/ControlsManager";

export default class TitleScene extends Phaser.Scene implements ControlsInterface {

    constructor() {
        super({ key: "TitleScene" });
    }

    preload(): void {
        let controlsManager: any = this.scene.get('ControlsManager');
        controlsManager.setCallbackContext(this);
    }

    create(): void {

    }
    actionButtonReleased(playerNum: number): void {
        
    }
    upButtonReleased(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    downButtonReleased(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    leftButtonReleased(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    rightButtonReleased(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    cancelButtonReleased(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    actionButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    upButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    downButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    leftButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    rightButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
    cancelButtonDown(playerNum: number): void {
        throw new Error("Method not implemented.");
    }
}