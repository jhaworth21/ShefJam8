import Peer from 'peerjs';

const connect_button = document.getElementById("connect_to_peer");
const peer_id_input_box = document.getElementById("peer_id_input");
const peer = new Peer();

function connect_to_peer(peer_id) {
   console.debug(`Attempting to connect to peer ${peer_id}`)
   const conn = peer.connect(peer_id);

   conn.on('open', function() {
      console.log("Connected to peer 🎉🎉")
      // Receive messages
      conn.on('data', function(data) {
         console.log('Received', data);
      });

      // Send messages
      conn.send('Hello!');
   });
}

connect_button.addEventListener("click", () => {
   connect_to_peer(peer_id_input_box.value);
});

// const peer = new Peer();
// console.log(peer);
