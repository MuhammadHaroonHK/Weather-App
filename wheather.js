const Apikey= "69a052f14c534b2aa93acacdd357098a";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let humi =document.querySelector("#hum");
let air = document.querySelector("#wind");
let picture=document.querySelector("#wheather-icon");
let input=document.querySelector("#search");
let button=document.querySelector("#search-btn");
let subCont=document.querySelector(".wheather");
let msg=document.querySelector("#messege");


async function checkweather(citys) {
    let response = await fetch(apiUrl + citys + `&appid=${Apikey}`);

    if(response.status== 404){
        msg.style.display="block";
        subCont.style.visibility="hidden";
    }else if(response.status= 200) {
        msg.style.display="none";
    }

    var data=await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round( data.main.temp) +`<sup>0</sup>C`;
    humi.innerHTML = data.main.humidity +"%";
    air.innerHTML = data.wind.speed +"Km/h";


    if(data.weather[0].main =="Clouds") {
        picture.src="clouds.png";
    } else if(data.weather[0].main =="Clear") {
        picture.src="clear.png";
    } else if(data.weather[0].main =="Rain") {
        picture.src="rain.png";
    } else if(data.weather[0].main =="Mist") {
        picture.src="mist.png";
    } else if(data.weather[0].main =="Drizzle") {
        picture.src="drizzle.png";
    }

}

button.addEventListener(('click') , () =>{
    subCont.style.visibility="visible";
    checkweather(input.value);

});