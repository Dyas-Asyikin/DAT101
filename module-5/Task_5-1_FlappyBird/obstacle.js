"use strict";
import { TSprite} from "libSprite";

export class TObstacle{
    #spUp;
    #spDown;
    constructor(aSpcvs, aSPI, aX, aY){
        this.#spDown = new TSprite(aSpcvs, aSPI, 400, 300);
        this.#spUp = new TSprite(aSpcvs, aSPI, 400, -100);
        this.#spUp.index = 3;
        this.#spDown.index = 2;
    }

    draw(){
        this.#spDown.draw();
        this.#spUp.draw();
    }

    animate(){
        this.#spDown.x --;
        this.#spUp.x --;
        if(this.#spDown.x < -this.#spDown.width){
            this.#spDown.x = 600;
            this.#spUp.x = 600;
        }
    }
}
