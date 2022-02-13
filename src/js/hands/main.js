import {start_scanning} from "./scanner";
import {connect_to_peer, get_connection} from "./client";

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
    if (current_state !== "controller") {
        return;
    }

    const alpha = 180 - event.beta;

    const connection = get_connection();
    if (connection != null && connection.open) {
        connection.send({
            "type": "set_player_velocity",
            "data": {
                "velocity": alpha / 180
            }
        })

        console.log("Attempted to send")
    }
}

function handleScreenClick(event) {
    if (current_state !== "controller") {
        return;
    }

    const connection = get_connection();

    if (connection != null && connection.open) {
        connection.send({
            "type": "player_jump",
            "data": {}
        })
    }
}

document.body.addEventListener('click', handleScreenClick, true);

window.addEventListener("deviceorientation", handleOrientation);

enter_game_scan_state();
// enter_controller_state()
