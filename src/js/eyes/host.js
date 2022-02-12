import Peer from 'peerjs';

const peer = new Peer();
let connection = null;

export function getConnection() {
  return connection;
}

peer.on('open', function(peer_id) {
   console.log('My peer ID is: ' + peer_id);

   const peer_id_qr_code = document.getElementById("peer_id_qr_code");

   const qr_code_data = encodeURIComponent(JSON.stringify({
      "is_hacker": true,
      "peer_id": peer_id
   }))
   peer_id_qr_code.alt = `Peer ID: ${peer_id}`
   peer_id_qr_code.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qr_code_data}`
});

peer.on('connection', function(conn) {
   connection = conn;
   peer_event({"type": "peer_connected", "data": {}});

   conn.on('data', function(data) {
      peer_event(data)
   });

   conn.on('close', function() {
      peer_event({"type": "peer_disconnected", "data": {}});
   });

   conn.on('error', function(err) {
      peer_event({"type": "peer_error", "data": {"error": err}});
   });
});

function peer_event(data) {
   console.debug(`Peer event: ${JSON.stringify(data)}`);

   if (data.type === "peer_connected") {
      document.getElementById("connection_info").style.display = "none";
      // start_game();
   }

   if (data.type === "set_player_velocity") {
      // set_player_velocity()
   }

   if (data.type === "player_jump") {
      // player_jump()
   }

   if (data.type === "peer_disconnected") {
      alert("The other player has disconnected.");
      document.location.reload();
   }

   if (data.type === "peer_error") {
      console.error("Peer communication error: " + data.data.error);
   }
}

function send_peer_event(data) {
   if (connection) {
      connection.send(data);
   }
}

export function game_end() {
   send_peer_event({"type": "game_end", "data": {}});
}
