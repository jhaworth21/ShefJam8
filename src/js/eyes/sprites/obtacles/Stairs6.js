import Obstacle from "./Obstacle";

export default class Stairs6 extends Obstacle {
   constructor(scene, x) {
      super(scene, x, [
         [1, 0, 0, 1, 1, 1],
         [0, 1, 0, 0, 0, 1],
         [0, 1, 1, 0, 1, 1],
         [0, 0, 0, 0, 0, 1],
      ]);
   }
}