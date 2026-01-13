"use strict";

import { TSprite} from "libSprite"

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 50, 200);
        this.animationSpeed = 10;
        this.#gravity = 9.81 / 10;
        this.#speed = 0;
    }

    animate(){
        if(this.y < 400 - this.height){
        this.#speed += this.#gravity * 0.1;
        this.y += this.#speed;
        
            if (this.rotation < 90) {
            this.rotation = this.#speed * 8;
            }
        }
    }
    
    flap(){
        this.#speed = -3.5;
    }

}