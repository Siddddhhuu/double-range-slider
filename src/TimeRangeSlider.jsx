import React, { useState } from "react";
import Slider from "react-slider";
import { formatTime, getBackgroundGradient } from "./utils";

const TimeRangeSlider = () => {
  const [timeRange, setTimeRange] = useState([360, 1110]); 

  return (
    <div className="slider-container" style={{ background: getBackgroundGradient(timeRange) }}>
      <div className="slider-box">
        <Slider
          className="slider"
          value={timeRange}
          onChange={setTimeRange}
          min={0}
          max={1439}
          step={1}
          pearling
          renderThumb={(props) => <div {...props} className="thumb"></div>} 
        />
        <div className="time-values">
          <span>🌅 {formatTime(timeRange[0])}</span>
          <span>🌙 {formatTime(timeRange[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeRangeSlider;
