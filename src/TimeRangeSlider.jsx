import React, { useState } from "react";
import Slider from "react-slider";
import { formatTime, getBackgroundGradient, getSunMoonPosition } from "./utils";

const TimeRangeSlider = () => {
  const [timeRange, setTimeRange] = useState([360, 1110]); // 06:00 AM - 06:30 PM

  return (
    <div className="slider-container" style={{ background: getBackgroundGradient(timeRange) }}>
      {/* Sun (6 AM - 6 PM) */}
      {timeRange[0] >= 360 && timeRange[0] <= 1079 && (
        <div className="sun" style={getSunMoonPosition(timeRange[0])}></div>
      )}

      {/* Moon (6 PM - 6 AM) */}
      {timeRange[0] >= 1080 || timeRange[0] < 360 ? (
        <div className="moon" style={getSunMoonPosition(timeRange[0])}></div>
      ) : null}

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
          <span style={{paddingLeft: "20px"}}>🌅 {formatTime(timeRange[0])}</span>
          <span style={{paddingRight: "20px"}}>🌙 {formatTime(timeRange[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeRangeSlider;
