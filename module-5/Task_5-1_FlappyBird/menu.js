"use strict";

import { TSprite, TSpriteButton } from "libSprite"
import { startGame } from "./FlappyBird.mjs";  

export class TMenu{
    #spTitle;
    #spPlayBtn;
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 150);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 210);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
    }

    spPlayBtnClick(){
        console.log("Clicked.");
        this.#spPlayBtn.hidden = true;
        this.#spTitle.hidden = true;
        startGame();
    }
}