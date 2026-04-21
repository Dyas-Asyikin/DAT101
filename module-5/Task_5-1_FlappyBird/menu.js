"use strict";

import { TSprite, TSpriteButton, TSpriteNumber  } from "libSprite"
import { startGame, aIsMuted, EGameStatus, restartGame, gameOver } from "./FlappyBird.mjs";  
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    #sfRunning;
    #spGameScore;
    #spGetReady;
    #spGameOverBillboard;
    #spMedal;
    #spFinalScore;
    #spHighScore;
    
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 150);
        this.#spTitle.hidden = false;
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 280);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 210);
        this.#spCountDown.visible = false;
        this.#sfCountDown = null;
        this.#sfRunning = null;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 280, 10);
        this.#spGameScore.alpha = 0.5, 0;
        this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 200, 150);
        this.#spGetReady.index = 0;
        this.#spGetReady.hidden = true;
        
        this.#spGameOverBillboard = new TSprite(aSpcvs, aSPI.gameOver, 180, 150);
        this.#spGameOverBillboard.hidden = true;
        
        this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 207, 193);
        this.#spMedal.hidden = true;
        
        this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 355, 185);
        this.#spFinalScore.visible = false;
        
        this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 355, 230);
        this.#spHighScore.visible = false;
    }    

    inGameScore(aScore){
        this.#spGameScore.value += aScore;
    }

    stopSounds(){
        this.#sfRunning.stop();
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
        this.#spGameScore.draw();
        this.#spGetReady.draw();
        this.#spGameOverBillboard.draw();
        this.#spMedal.draw();
        this.#spFinalScore.draw();
        this.#spHighScore.draw();
    }

    countDown(){
        this.#spCountDown.value--;
        if(this.#spCountDown.value > 0){
            setTimeout(this.countDown.bind(this), 1000);
        }else{
            this.#spCountDown.visible = false;
            this.#spTitle.hidden = true;
            this.#spGetReady.hidden = true;
            startGame();
        if (!aIsMuted) {
        this.#sfRunning = new TSoundFile(fnRunning);
        this.#sfRunning.play();
        }
        }
    }

    spPlayBtnClick(){
        console.log("Clicked.");
        restartGame();
        this.#spPlayBtn.hidden = true;
        this.#spCountDown.visible = true;
        this.#spTitle.hidden = true;
        this.#spGetReady.hidden = false;
        this.#spCountDown.value = 3;
        this.#spGameOverBillboard.hidden = true;
        this.#spMedal.hidden = true;
        this.#spFinalScore.visible = false;
        this.#spHighScore.visible = false;
        if (!aIsMuted) {
        this.#sfCountDown = new TSoundFile(fnCountDown);
        this.#sfCountDown.play();
        }
        setTimeout(this.countDown.bind(this), 1000);
    }

    setSoundMute(aIsMuted) {
  if(aIsMuted){
    this.#sfRunning.pause();
    console.log("Muting sound fr");
  }
  else if (aIsMuted === false && EGameStatus.state === EGameStatus.gaming){
    this.#sfRunning.play();
    console.log("Unmuting sound fr");
  }
 }

    compareScores(){
    const finalScore = this.#spGameScore.value;
    this.#spFinalScore.value = finalScore;
    const highScore = localStorage.getItem("flappyBirdHighScore") || 0;
    if(finalScore > highScore){
      localStorage.setItem("flappyBirdHighScore", finalScore);
      this.#spHighScore.value = finalScore;
    }else{
      this.#spHighScore.value = highScore;
    }

  }

  medalLogic(){
    // 0 = No medal, 1 = Bronze, 2 = Silver, 3 = Gold
    if (this.#spGameScore.value >= 3){
      this.#spMedal.index = 2;
    } else if (this.#spGameScore.value == 2){
      this.#spMedal.index = 1;
    } else if (this.#spGameScore.value == 1){
      this.#spMedal.index = 3;
    } else {
      this.#spMedal.index = 0;
    }
  }

    showGameover(){
        this.compareScores();
        this.medalLogic();
        this.#spGameOverBillboard.hidden = false;
        this.#spMedal.hidden = false;
        this.#spFinalScore.visible = true;
        this.#spHighScore.visible = true;
        this.#spPlayBtn.hidden = false;
        this.#spGameScore.value = 0;
        this.#sfRunning.stop();
    }

}

 