import { Sprite } from "pixi.js";
import Container = PIXI.Container;

export default class Gun extends Container {
	private _carriage:Sprite;
	private _barrel:Sprite;
    public barrelContainer:PIXI.Container;

	constructor() {
		super();

        this._carriage = Sprite.from("carriage");
        this._carriage.x = 0;
        this._carriage.y = 0;
		this.addChild(this._carriage);

        this.barrelContainer = new PIXI.Container;
        this.barrelContainer.x = 39
        this.barrelContainer.y = 33
        this.addChild(this.barrelContainer);

        this._barrel = Sprite.from("barrel");
        this._barrel.x = 8;
        this._barrel.y -= 38;
		this.barrelContainer.addChild(this._barrel);
	}
}