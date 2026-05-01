let form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("Form submitted");

let city = document.querySelector("input").value;

let response = document.querySelector(".response");
if(city===""){
    response.innerHTML="please fill colums"
    return
}
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=6b90990eba0971e341d9db61a4c8ff9f")
   



.then(function(res){
        return res.json();
    })

    .then(function(data){

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    }).catch(function(){
        alert("City not found");
    });
})

