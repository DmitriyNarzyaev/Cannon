import Graphics = PIXI.Graphics;

export class Mob extends Graphics
{
	public mobSpeedY:number = 0;
	public mobGravity:number = .5 + Math.random()/2;
	public mobRadius:number = 30+(Math.random())*40;
    public mobColor:number = 0xff0000
	private _circle:Graphics;

	constructor() {
		super();
		this._circle = new PIXI.Graphics();
		this._circle.beginFill(0xffffff, 0);
		this._circle.lineStyle(5, 0xffffff);
		this._circle.drawCircle(0, 0, this.mobRadius);
		this._circle.endFill();
		this.addChild(this._circle);
	}
}