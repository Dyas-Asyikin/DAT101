"use strict";

import { TSprite} from "libSprite"
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const sfEat = "./Media/food.mp3";
const sfDead = "./Media/gameOver.mp3";
const sfHeroisDead = "./Media/heroIsDead.mp3";

export class THero extends TSprite{
    #gravity;
    #speed;
    #wave;
    #sfEat;
    #sfHeroisDead;
    #sfDead;
    constructor (aSpcvs, aSPI){
        super (aSpcvs, aSPI, 100, 200);
        this.animationSpeed = 15;
        this.#gravity = 9.81 / 80;
        this.#speed = 0;
        this.#wave = new TSineWave(0.5, 2);
        this.y += this.#wave.value;
        this.#sfEat = null;
        this.#sfHeroisDead = null;
        this.#sfDead = null;
    }

    animate(){
        const hasGravity =
        EGameStatus.state === EGameStatus.gaming 
            || EGameStatus.state === EGameStatus.heroIsDead;

        if(hasGravity){
        if(this.y < 400 - this.height){
            this.#speed += this.#gravity; // increase speed due to gravity
            this.y += this.#speed; // update position based on speed
            if(this.rotation < 70){ // limit rotation to max 90 degrees
            this.rotation = this.#speed * 25; //tilt down based on speed
            }
      }
            else{
            EGameStatus.state = EGameStatus.gameOver;
            this.animationSpeed = 0;
            }
             }else if(EGameStatus.state === EGameStatus.idle){
             this.y += this.#wave.value;
             }
    } // end of animate

        eat(){
        if (this.#sfEat === null){
        this.#sfEat = new TSoundFile(sfEat);
        }else{ 
        this.#sfEat.stop();
        }
        this.#sfEat.play();
        }
    
        dead(){
        this.#sfHeroisDead = new TSoundFile(sfHeroisDead);
        this.#sfHeroisDead.play();
        }

        flap(){
        this.#speed = -3; // give an instant upward speed
        this.rotation = -30; // tilt up;
        }
}