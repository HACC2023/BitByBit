import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode-scanner-dinte';

const QrCodeScanner = () => {
  const videoRef = useRef(null);
  const resultTextRef = useRef(null);
  const qrcodeScannerRef = useRef(null);

  useEffect(() => {
    const initializeScanner = async () => {
      qrcodeScannerRef.current = new Html5Qrcode(videoRef.current, true);

      qrcodeScannerRef.current.start(async (decodedText) => {
        resultTextRef.current.textContent = decodedText;
        qrcodeScannerRef.current.clear();
      });
    };

    initializeScanner();

    return () => {
      if (qrcodeScannerRef.current) {
        qrcodeScannerRef.current.stop();
      }
    };
  }, []);

  const startScanning = () => {
    if (qrcodeScannerRef.current) {
      qrcodeScannerRef.current.start();
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} id="qrcode-scanner-video" />
      <button onClick={startScanning} type="button">
        Start Scanning
      </button>
      <div id="qrcode-result" style={{ display: 'none' }}>
        <p>Scanned QR Code:</p>
        <p ref={resultTextRef} />
      </div>
    </div>
  );
};

export default QrCodeScanner;
