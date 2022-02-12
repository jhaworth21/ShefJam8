import {start_scanning} from "./scanner";
import {connect_to_peer} from "./client";

function enter_game_scan_state() {
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
   document.getElementById("connect_to_game").style.display = "none";
   document.getElementById("controller").style.display = null;
}

enter_game_scan_state();
