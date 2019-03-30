window.addEventListener("load", () => {
  let long;
  let lat;
  //assigns it to HTML element
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone')


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
        //the proxy is needed to fix a CORS issue
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/2e9aa44caabe465e4d241f93dceeda76/${lat},${long}`;

      fetch(api)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          const { temperature, summary } = data.currently;
            //Set DOM elements from API
            //.textContent assigns the DOM element a text
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
        });
    });
  }
});
