import './InfoPopup.css';

import React from 'react';

function InfoPopup({ message }) {

  return (
    <div className="info">
      <p className="info__massage">{message}</p>
    </div>
  );
}

export default InfoPopup;
