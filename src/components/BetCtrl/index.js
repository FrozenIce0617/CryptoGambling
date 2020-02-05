import React from 'react';

import './styles.css';

const BetCtrl = props => {
  const { value, onChange } = props;

  const handleChange = e => {
    onChange(e.target.value);
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
            value={value}
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
