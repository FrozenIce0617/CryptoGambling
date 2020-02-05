import React from 'react';

import Header from '../../components/Header';
import VerticalSlider from '../../components/VerticalSlider';
import Table from '../../components/Table';
import BetCtrl from '../../components/BetCtrl';
import './styles.css';

const Dashboard = () => {
  const [sliderVal, setSliderVal] = React.useState(69);
  const [betMount, setBetMount] = React.useState(0.04885313);

  const renderRangeSliderContainer = () => {
    return (
      <div className="section-slider-container">
        <VerticalSlider
          min={0}
          max={100}
          value={sliderVal}
          onSliderChange={setSliderVal}
        />
        <BetCtrl value={betMount} onChange={setBetMount} />
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div className="section-table-container">
        <div className="table-container">
          <Table />
        </div>
      </div>
    );
  };

  const renderBetContainer = () => {
    return (
      <div className="section-bet-container">
        <div className="bet-container">
          <img
            className="bet-upper"
            src={require('../../assets/images/Upper.png')}
            alt="Top"
          />
          <img
            className="bet-lower"
            src={require('../../assets/images/Lower.png')}
            alt="Lower"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        {renderRangeSliderContainer()}
        {renderTable()}
        {renderBetContainer()}
      </div>
    </div>
  );
};

export default Dashboard;
