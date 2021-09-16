import Gun from "./Gun";
import Container = PIXI.Container;

export default class Shot extends Container {
	private _shot:PIXI.Graphics;
	public shotRadius:number = 5;
    public gunRotationSave:number = Gun.BARREL_CONTAINER.rotation;
    public shotSpeed:number = 16;
    public shotSpeedY:number = 0;
	public readonly shotGravity:number = .15;

	constructor() {
    super();
        this._shot = new PIXI.Graphics();
        this._shot
            .beginFill(0xff5555, 1)
            .drawCircle(0, 0, this.shotRadius);
        this.addChild(this._shot);
	}
}
