export const timeSince = (date) => {
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " წლის";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " თვის";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " დღის";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " საათის";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " წუთის";
    }
    return Math.floor(seconds) + " წამის";
  
  };