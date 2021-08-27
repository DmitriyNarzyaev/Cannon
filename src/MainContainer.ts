import Container = PIXI.Container;
import { Loader, Sprite } from "pixi.js";
import Gun from "./Gun";
import TitleScreen from "./TitleScreen";
import Button from "./Button";

export default class MainContainer extends Container {
	public static readonly WIDTH:number = 1500;
	public static readonly HEIGHT:number = 844;
	private _background:Sprite;
	private _title:TitleScreen;
	private _button:Button;
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
			//this.startGame();
			this.initialTitle();
		});
		loader.load();
	}

	private initialTitle():void {
		let titleText:string = "CANNON DEFENDER"
		let buttonGap:number = 50;

		this._title = new TitleScreen(MainContainer.WIDTH, MainContainer.HEIGHT, titleText);
		this.addChild(this._title);

		this._button = new Button("START", () => {this.startGame();});
		this._button.x = (MainContainer.WIDTH - this._button.width)/2;
		this._button.y = (MainContainer.HEIGHT - this._button.height)/2 + buttonGap;
		this.addChild(this._button);
	}

	private removeTitle():void {
		this.removeChild(this._title);
		this.removeChild(this._button);
	}

	private startGame():void {
		this.removeTitle();

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