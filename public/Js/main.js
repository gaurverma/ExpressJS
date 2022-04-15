const btn  = document.getElementById('submitted');
const cityName = document.getElementById('cityName');
const cityinfo = document.getElementById('city-info');
const temp = document.getElementById('temp');
const statusicon = document.getElementById('statusicon');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal == ""){
        cityinfo.innerText = "City name cannot be empty";
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a54d4bda9d973b883ceb6af6cd9859e6`;
          
            const response  = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

           
            const temp_status  = arrdata[0].weather[0].main;
            
            cityinfo.innerText = `Here is the weather info for ${cityVal}`;
            if(temp_status == "Clouds"){
                temp.innerText = `${arrdata[0].main.temp}                                               ${temp_status}`;
               statusicon.innerHTML = '<img class="card-img-top"  src = "images/Cloud.png">';
            }else if(temp_status == "Rain"){
                temp.innerText = `${arrdata[0].main.temp}                                               ${temp_status}`;
                statusicon.innerHTML = '<img class="card-img-top"  src = "images/rain.png">';
            }else if(temp_status == "Haze"){
                temp.innerText = `${arrdata[0].main.temp}                                               ${temp_status}`;
                statusicon.innerHTML = '<img class="card-img-top"  src = "images/haze.png">';
            }else if(temp_status == "Clear"){
                temp.innerText = `${arrdata[0].main.temp}                                               ${temp_status}`;
                statusicon.innerHTML = '<img class="card-img-top"  src = "images/Clear.png">';
            }else if(temp_status == "Sunny"){
                temp.innerText = `${arrdata[0].main.temp}                                               ${temp_status}`;
                statusicon.innerHTML = '<img class="card-img-top"  src = "images/sunny.png">';
            } 
            
        }catch{
            temp.innerText = ``;
            statusicon.innerHTML = '<img class="card-img-top"  src = "images/think.jfif">';
            cityinfo.innerText = "Please enter the city name properly";
        }
    }
    

}

btn.addEventListener('click', getInfo);