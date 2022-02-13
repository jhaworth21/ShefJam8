export default class CountdownControllerOLD {

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
    start(callback, duration = 10000){

        // this.stop();
        this.duration = duration;
        console.log("Setting duration to " + this.duration)

        //sets the timer event 
        this.timer_event = this.scene.time.addEvent({
            delay: duration,
            // callback: () => {
            //     // this.stop()

            //     if (callback)
            //     {
            //         callback()
            //     }
            // }
        });
    }

    // stop(){
    //     if (this.timer_event && this.remaining <= 0){
    //         console.log("stopped");
    //         //removes the timer_event queue
    //         this.timer_event.destroy();
    //         this.time_event = undefined;
    //     }
    // }

    update(){

        //if there isn't a timer or the duration is 0 or below
        if (this.remaining <= 0){
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

        
        console.log("elapsed: " + elapsed);
        // console.log("duration: " + this.duration);
        // console.log("remaining: " + remaining);
    }

    increment(){
        this.duration += 10000;
        this.remaining += 10000;
    }
}