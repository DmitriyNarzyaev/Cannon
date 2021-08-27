import Container = PIXI.Container;
import { Loader, Sprite } from "pixi.js";
import Gun from "./Gun";

export default class MainContainer extends Container {
	public static readonly WIDTH:number = 1500;
	public static readonly HEIGHT:number = 844;
	private _background:Sprite;
	private _gun:Gun;

	constructor() {
		super();
		this.pictureLoader();
	}

	private pictureLoader():void {
        const loader:Loader = new Loader();
		loader.add("background", "bg.jpg");
		loader.add("carriage", "carriage.png");
		loader.add("barrel", "barrel.png");
		loader.on("complete", ()=> {
			this.startGame();
		});
		loader.load();
	}

	private startGame():void {
		this.initialBackground();
		this.initialGun();
	}

	private initialBackground():void {
		this._background = Sprite.from("background");
		this.addChild(this._background);
	}

	private initialGun():void {
		const carriageHeight:number = 100;
		this._gun = new Gun();
		this._gun.x = 50;
		this._gun.y = MainContainer.HEIGHT - carriageHeight;
		this.addChild(this._gun);
	}
}