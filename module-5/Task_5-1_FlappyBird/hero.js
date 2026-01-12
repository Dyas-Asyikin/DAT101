"use strict";

import { TSprite} from "libSprite"

export class THero{
    #spriteHero;

    constructor(aSpcvs, aSPI){
        this.#spriteHero = new TSprite(aSpcvs, aSPI.hero1, 50, 200);
    }

    draw(){
        this.#spriteHero.draw();
    }
}