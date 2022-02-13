import Crate from "../Crate";

export default class Obstacle {

   constructor(scene, x, structure) {
      const y = 0.92 * scene.scale.height - 15;
      const crate_size = 75;

      // Generating structure
      for (let row = 0; row < structure.length; row++) {
         for (let col = 0; col < structure[row].length; col++) {
            if (structure[structure.length - row - 1][col] === 1) {
               new Crate(scene, x + col * crate_size, y - row * crate_size, "crate");
            }
         }
      }
   }

}
