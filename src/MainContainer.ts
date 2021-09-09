import Container = PIXI.Container;
import { IPoint, Loader, Sprite } from "pixi.js";
import Gun from "./Gun";
import TitleScreen from "./TitleScreen";
import Button from "./Button"
import InteractionEvent = PIXI.interaction.InteractionEvent;import { Mob } from "./Mob";
import Global from "./Global";

export default class MainContainer extends Container {
	public static readonly WIDTH:number = 1500;
	public static readonly HEIGHT:number = 844;
	private _mobs:Set<Mob> = new Set();
	private _background:Sprite;
	private _title:TitleScreen;
	private _button:Button;
	private _gun:Gun;
	private _iterator:number = 0;

	constructor() {
		super();
		this.pictureLoader();
		this.interactive = true;
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

	private removeAll():void {
		this.removeChild(this._title);
		this.removeChild(this._button);
	}

	private startGame():void {
		this.removeAll();
		this.initialBackground();
		this.initialGun();
		console.log(this._iterator);
		Global.PIXI_APP.ticker.add(this.tick, this);
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

		this.addListener('mousemove', this.mouseMoveHandler, this);
	}

	private createMob():void {
		const mob = new Mob();
		mob.x = MainContainer.WIDTH + mob.width/2;
		mob.y = Math.random() * (MainContainer.HEIGHT-mob.height);
		this.addChild(mob);
		this._mobs.add(mob);
	}

	private mouseMoveHandler(event:InteractionEvent):void {
		let mousePoint:IPoint = Gun.BARREL_CONTAINER.parent.toLocal(event.data.global);
		Gun.BARREL_CONTAINER.rotation =
		Math.atan2 (
			mousePoint.x - Gun.BARREL_CONTAINER.x,
			-(mousePoint.y - Gun.BARREL_CONTAINER.y)
		) -Math.PI/2;
	}

	private tick():void {
		this._iterator ++
		if (this._iterator == 30) {
			this.createMob();
			this._iterator = 0;
		}
		if (this._mobs.size >= 0) {
			this._mobs.forEach((mob:Mob) => {
				mob.x -= 2
			});
		}
	}
}
