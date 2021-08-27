import { TextStyle } from "pixi.js";
import Container = PIXI.Container;

export default class TitleScreen extends Container {

	constructor(titleWidth:number, titleHeight:number, titleText:string) {
		super();
        const titleBackground:PIXI.Graphics = new PIXI.Graphics;
        titleBackground
            .beginFill(0x000000)
            .drawRect(0, 0, titleWidth, titleHeight);
        this.addChild(titleBackground);

        let textStyle:TextStyle = new PIXI.TextStyle ({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#FFFFFF'],
        });

        const buttonText:PIXI.Text = new PIXI.Text (titleText, textStyle);
        buttonText.x = (titleWidth - buttonText.width)/2;
        buttonText.y = (titleHeight - buttonText.height)/2;
        this.addChild(buttonText);
	}
}