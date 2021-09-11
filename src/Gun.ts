import { Sprite } from "pixi.js";
import Container = PIXI.Container;

export default class Gun extends Container {
    public static BARREL_CONTAINER:PIXI.Container;
	private _carriage:Sprite;
	private _barrel:Sprite;

	constructor() {
		super();

        this._carriage = Sprite.from("carriage");
        this._carriage.x = 0;                       //fixme magic number
        this._carriage.y = 0;                       //fixme magic number
		this.addChild(this._carriage);

        Gun.BARREL_CONTAINER = new PIXI.Container;
        Gun.BARREL_CONTAINER.x = 38                 //fixme magic number
        Gun.BARREL_CONTAINER.y = 33                 //fixme magic number
        this.addChild(Gun.BARREL_CONTAINER);

        this._barrel = Sprite.from("barrel");
        this._barrel.x = 9;                         //fixme magic number
        this._barrel.y -= 38;                       //fixme magic number
		Gun.BARREL_CONTAINER.addChild(this._barrel);
	}
}
