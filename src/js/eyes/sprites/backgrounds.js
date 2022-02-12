export function add_backgrounds(scene) {
   const height = scene.scale.height;
   const bg = scene.add.tileSprite(0, height, 1080, 1080, "bg").setOrigin(0, 1);
   bg.setScale(scene.cameras.main.width / bg.width);

   const mg = scene.add.tileSprite(0, height, 1080, 1080, "mg").setOrigin(0, 1);
   mg.setScale(scene.cameras.main.width / mg.width);

   const fg = scene.add.tileSprite(0, height, 1080, 1080, "fg").setOrigin(0, 1);
   fg.setScale(scene.cameras.main.width / fg.width);

   scene.movement_manager.background.push(bg);
   scene.movement_manager.midground.push(mg);
   scene.movement_manager.foreground.push(fg);

}
