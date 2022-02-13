import Phaser from "phaser";

export default class CountdownController {

    constructor(label){
        this.current_time = null;

        this.start_time = null;
        this.end_time = null;
        this.remaining_time = 0;

        this.label = label
    }

    start(){
        this.current_time = new Date().getTime();

        this.start_time = this.current_time/1000;
        this.end_time = (this.start_time + 10);
        this.remaining_time = (this.end_time - this.start_time);
        // console.log(this.end_time);
    }

    update(){

        // console.log("start time: " + this.start_time);
        // console.log("remaining time: " + this.end_time);

        if(this.start_time == this.end_time){
            console.log("times up");
            return;
        }

        this.current_time = new Date().getTime()/1000;

        this.remaining_time = (this.end_time - this.current_time);
        this.label.text = this.remaining_time.toPrecision(2);
    }

    increment(){
        console.log("incremented");
        this.end_time += 10;
    }

    // getTimeDiff(time1, time2){
    //     var time_diff = time1 - time2;
    //     var sec_diff = time_diff.getSeconds();

    //     return sec_diff;
    // }
}