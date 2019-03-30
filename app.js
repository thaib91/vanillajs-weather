window.addEventListener("load", () => {
  let long;
  let lat;
  //assigns it to HTML element
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
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
          const { temperature, summary, icon } = data.currently;
          //Set DOM elements from API
          //.textContent assigns the DOM element a text
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
            //set icon
            setIcons(icon, document.querySelector('.icon'))
        });
    });
  }
  function setIcons(icon, iconID){
      const skycons = new Skycons({color: 'white'});
      const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon])
  }
});
