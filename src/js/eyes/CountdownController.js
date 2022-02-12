export default class CountdownController {

    /**@type {Phaser.Scene} */
    scene

    /**@type {Phaser.GameObjects.Text} */
    label

    /**@type {Phaser.Time.TimerEvent} */
    timer_event

    /**@type {number} */
    duration = 0

    /**@type {number} */
    remaining;

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {Phaser.GameObjects.Text} label 
     */
    constructor(scene, label){
        this.scene = scene;
        this.label = label;
    }

    /**
     * @param {() => void} [callback] 
     * @param {number} duration 
     */
    start(callback, duration = 15000){

        this.stop();
        this.duration = duration;
        console.log("Setting duration to " + this.duration)

        //sets the timer event 
        this.timer_event = this.scene.time.addEvent({
            delay: duration,
            callback: () => {
                this.stop()

                if (callback)
                {
                    callback()
                }
            }
        });
    }

    stop(){
        if (this.timer_event){
            //removes the timer_event queue
            this.timer_event.destroy();
            this.time_event = undefined;
        }
    }

    update(){

        //if there isn't a timer or the duration is 0 or below
        if (!this.timer_event || this.duration <= 0){
            return;
        }

        //gets the elapsed time
        var elapsed = this.timer_event.getElapsed();

        //gets the remaining time
        var remaining = this.duration - elapsed;
        //converts to seconds
        var seconds = remaining/1000;

        //sets the text label for the timer
        this.label.text = seconds.toPrecision(2);

        if (seconds == 0){

        }
    }

    increment(){
        console.log(this.duration)
        this.duration += 15000;
        // elapsed = 0;
        console.log(this.duration);
    }

    // setElapsed(elapsed){
    //     elapsed = elapsed;
    // }
}