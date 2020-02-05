import React from 'react';
import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';
import './styles.css';

const VerticalSlider = props => {
  const { min, max, value, onSliderChange } = props;

  const onHandleChange = value => {
    onSliderChange(value);
  };

  return (
    <div className="vertical-slider-container">
      <div className="vertical-slider-label">
        <span>{max}</span>
        <span>{min}</span>
      </div>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={onHandleChange}
        handleLabel={value}
        orientation="vertical"
        tooltip={false}
      />
    </div>
  );
};

export default VerticalSlider;
