export const getUrlWithName = (name) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d5d3f0cb21de6ab59ec38f7cbadea3f5`
}

export const getUrlWithCoords = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d5d3f0cb21de6ab59ec38f7cbadea3f5`
}

export const convertDegrees = (metrics, temperature) => metrics === 'C' ? temperature : temperature * 9 / 5 + 32;

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

export const getCurrentDateFormatted = () => {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  return currentDate;
}
