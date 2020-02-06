import React, { useState } from 'react';

import './styles.css';

const BetCtrl = props => {
  const [betMount, setBetMount] = useState(0.04885313);

  const handleChange = e => {
    setBetMount(e.target.value);
  };

  return (
    <div className="bet-ctrl-container">
      <div className="bet-ctrl-input">
        <span className="bet-ctrl-input-text">BET AMOUNT</span>
        <div className="bet-ctrl-input-container">
          <img
            className="bet-ctrl-input-icon"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png"
            alt="BTC"
          />
          <input
            className="bet-ctrl-input-ctrl"
            type="text"
            value={betMount}
            onChange={handleChange}
            maxLength={10}
          />
        </div>
      </div>
      <div className="bet-ctrl-actions">
        <button className="bet-ctrl-action">1/2</button>
        <button className="bet-ctrl-action">x2</button>
      </div>
    </div>
  );
};

export default BetCtrl;
