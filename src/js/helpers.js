export function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLs(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    };



