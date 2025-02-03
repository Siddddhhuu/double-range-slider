export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${mins.toString().padStart(2, "0")} ${period}`;
};

// Dynamic background based on selected time
export const getBackgroundGradient = ([start, end]) => {
  return `linear-gradient(to right, 
    #002F6C ${start / 14.4}%, 
    #FFCF81 ${(end - start) / 14.4}%, 
    #002F6C 100%)`;
};
