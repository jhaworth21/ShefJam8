export default class CountdownController{

    /**@type {Phaser.Scene} */
    scene

    /**@type {Phaser.GameObjects.Text} */
    label

    /**@type {Phaser.Time.TimerEvent} */
    timer_event

    /**@type {() => void} */
    timer_callback

    /**@type {number} */
    duration = 0

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
     * 
     * @param {number} duration 
     * @param {() => void} callback 
     */
    start(duration = 30000, callback){
        


        this.stop();
        this.timer_callback = callback;

        this.duration = duration;
        console.log(this.duration);

        this.timer_event = this.scene.time.addEvent({
            delay: duration,
            callback: () => {this.stop()
            if (callback){callback()}}
        });
    }

    stop(){
        if(this.timerEvent){
            this.timer_event.destroy();
            this.time_event = undefined;
        }
    }

    update(){

        if (!this.timerEvent || this.duration <= 0){
            return;
        }

        var elapsed = this.timer_event.getElapsed();
        var remaining = this.duration - elapsed;
        // console.log(this.duration);
        var seconds = remaining/1000;
        // console.log(seconds)

        this.label.text = seconds.toFixed(2);

        if (remaining == 0){

        }
    }
}