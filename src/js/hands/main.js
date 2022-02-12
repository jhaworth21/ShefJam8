import {start_scanning} from "./scanner";
import {connect_to_peer} from "./client";

let current_state = "scanning";

function enter_game_scan_state() {
   current_state = "scanning";

   document.getElementById("connect_to_game").style.display = null;
   document.getElementById("controller").style.display = "none";
   start_scanning().then((peer_id) => {
      connect_to_peer(peer_id).then(() => {
         enter_controller_state();
      }).catch(() => {
         enter_game_scan_state();
      });
   });
}

function enter_controller_state() {
   current_state = "controller";

   document.getElementById("connect_to_game").style.display = "none";
   document.getElementById("controller").style.display = null;
}


function handleOrientation(event) {
   const alpha = 180 - event.alpha;
   console.log(alpha)
}

window.addEventListener("deviceorientation", handleOrientation);


// enter_game_scan_state();
enter_controller_state()
