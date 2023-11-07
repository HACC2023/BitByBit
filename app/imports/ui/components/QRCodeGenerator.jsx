import React, { useState, useEffect } from 'react';
import qrcode from 'qrcode';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCode, setQRCode] = useState('');

  useEffect(() => {
    if (text) {
      // Use the toDataURL method from the qrcode library
      qrcode.toDataURL(text, (err, dataUrl) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return;
        }
        setQRCode(dataUrl);
      });
    } else {
      setQRCode('');
    }
  }, [text]);

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div id="qrcode">
        {qrCode && <img src={qrCode} alt="QR Code" />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
