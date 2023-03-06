const api_key=`46ad7457603b9b0104e633e78cd60e16`;
//46ad7457603b9b0104e633e78cd60e16
function weather(city){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
fetch(url)
.then(res=>res.json())
.then(data=>displayInformation(data))
}
function take_action(){
const take_value = document.getElementById('input').value;
weather(take_value);
}
function displayInformation(data){
    console.log(data.weather[0].main);
    const city_name=document.getElementById('city_n');
    city_name.innerText=data.name
    const temperature=document.getElementById('temp');
    temperature.innerText=data.main.temp;
    const desc=document.getElementById('desc');
    desc.innerText=data.weather[0].main;


}