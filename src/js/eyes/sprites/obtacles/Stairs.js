import Obstacle from "./Obstacle";

export default class Stairs extends Obstacle {
   constructor(scene, x) {
      super(scene, x, [
         [0, 0, 0, 1],
         [0, 0, 1, 1],
         [0, 1, 1, 1],
         [1, 1, 1, 1],
      ]);
   }
}
