import { Sprite } from "pixi.js";
import Global from "./Global";
import Container = PIXI.Container;
import { IPoint } from "pixi.js";

export default class Gun extends Container {
	private _carriage:Sprite;
	private _barrel:Sprite;
    public static BARREL_CONTAINER:PIXI.Container;
    private _touchDownPoint:IPoint;

	constructor() {
		super();

        this._carriage = Sprite.from("carriage");
        this._carriage.x = 0;
        this._carriage.y = 0;
		this.addChild(this._carriage);

        Gun.BARREL_CONTAINER = new PIXI.Container;
        Gun.BARREL_CONTAINER.x = 38
        Gun.BARREL_CONTAINER.y = 33
        this.addChild(Gun.BARREL_CONTAINER);

        this._barrel = Sprite.from("barrel");
        this._barrel.x = 9;
        this._barrel.y -= 38;
		Gun.BARREL_CONTAINER.addChild(this._barrel);

	}
}