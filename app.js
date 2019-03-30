window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/2e9aa44caabe465e4d241f93dceeda76/${lat},${long}}`

        });
    
        fetch(api)
            .then(data)
    }
});