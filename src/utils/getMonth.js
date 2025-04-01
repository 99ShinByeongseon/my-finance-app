export function getMonth(dateString) {
    const parts = dateString.split("-");
    return parseInt(parts[1], 10);
  }
  