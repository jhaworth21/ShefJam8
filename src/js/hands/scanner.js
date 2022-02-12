import QrScanner from 'qr-scanner';

export function start_scanning() {
  document.getElementById("go_back_button").addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  return new Promise((resolve, reject) => {
    const videoElement = document.getElementById('qr_scanning_video');
    const qrScanner = new QrScanner(videoElement, (result) => {
      let qr_code_json_data;

      try {
        qr_code_json_data = JSON.parse(result.data);
      } catch(e) {
        // QR code is not JSON
        return;
      }

      if ("is_hacker" in qr_code_json_data && "peer_id" in qr_code_json_data) {
        // QR code is valid

        if (!qr_code_json_data.is_hacker) {
          alert("?!?!?")
        }

        qrScanner.stop();
        resolve(qr_code_json_data.peer_id);
      }
    }, {
      highlightScanRegion: true
    });

    qrScanner.start().catch((e) => {
      alert("Failed to start webcam: " + e)
      reject(e);
    });
  });
}
