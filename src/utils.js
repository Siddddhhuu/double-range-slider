export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
};

// Giving background gradient based on time
export const getBackgroundGradient = ([start]) => {
  if (start < 360) {
    return "linear-gradient(to right, #001F3F, #191970)"; // Night
  } else if (start >= 360 && start < 600) {
    return "linear-gradient(to right, #FFA500, #FFD700)"; // Sunrise
  } else if (start >= 600 && start < 1080) {
    return "linear-gradient(to right, #87CEEB, #FFD700)"; // Day  
  } else {
    return "linear-gradient(to right, #191970, #001F3F)"; // Night
  }
};

// Giving Sun/Moon position based on time
export const getSunMoonPosition = (time) => {
  const percent = (time / 1439) * 100;
  return {
    left: `${percent}%`,
    bottom: time >= 360 && time <= 1080 ? `${(time - 360) / 7}px` : "10px",
  };
};
