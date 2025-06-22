const showDetails = document.querySelector(".showDetails");





document.querySelector('.geo-btn').addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position.coords);
                const { latitude,longitude} = position.coords;
                showDetails.textContent = `Latitude : ${latitude}  && Longitude : ${longitude}`;
        },(error)=>{
            console.log(error.message);
        })
    }
})