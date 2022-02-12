import Peer from 'peerjs';

const connect_button = document.getElementById("connect_to_peer");
const peer_id_input_box = document.getElementById("peer_id_input");
const peer = new Peer();

let connection = null;

export function get_connection() {
   return connection;
}

export function connect_to_peer(peer_id) {
   return new Promise((resolve, reject) => {
      console.debug(`Attempting to connect to peer ${peer_id}`);
      const conn = peer.connect(peer_id);

      const connection_timeout = setTimeout(() => {
         if (!conn.open) {
            alert("Could not connect to peer, please try again");
            conn.close();
            reject();
         }
      }, 3000);

      conn.on('open', function () {
         console.log("Connected to peer 🎉🎉");
         clearTimeout(connection_timeout);

         register_connection_events(conn);
         resolve(conn);
      });
   });
}

function register_connection_events(conn) {
   conn.on('data', peer_event);

   conn.on('close', function() {
      peer_event({"type": "peer_disconnected", "data": {}});
   });

   conn.on('error', function(err) {
      peer_event({"type": "peer_error", "data": {"error": err}});
   });
}

export function peer_event(data) {
   console.debug(`Peer event: ${JSON.stringify(data)}`);

   if (data.type === "game_end") {
      document.location.reload();
   }

   if (data.type === "peer_disconnected") {
      alert("The other player has disconnected.");
      document.location.reload();
   }

   if (data.type === "peer_error") {
      console.error("Peer communication error: " + data.data.error);
   }
}
