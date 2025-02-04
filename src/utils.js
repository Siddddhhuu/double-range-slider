export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
};


export const getBackgroundGradient = ([start, end]) => {
  return `linear-gradient(to right, 
    #002F6C ${start / 14.4}%, 
    #FFCF81 ${(end - start) / 14.4}%, 
  rgb(32, 37, 44) 100%)`;
};

