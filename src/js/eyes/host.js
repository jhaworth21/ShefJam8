import Peer from 'peerjs';

const peer = new Peer();

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
   console.log("New connection! 🎉")

   conn.on('data', function(data) {
      console.log('Received', data);
      conn.send("Message recieved, hello client!")
   });
});
