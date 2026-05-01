let form=document.querySelector('form')
//if height is written here empty value is assigned after refresh
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("Form submitted");


let fname=document.getElementById("fname").value
let lname=document.getElementById("lname").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value
let response = document.querySelector(".response");
if(fname==="" || email==="" || message===""){
    response.innerHTML=" Please Fill columns"
    return   //dont execute fetch
}
fetch("https://shubhangi1112.app.n8n.cloud/webhook-test/30d89097-ddcb-41af-93cc-ea2714b80ba3",
    {
        method:"POST",
        headers:{"Content-Type": "application/json"
        },
        body:JSON.stringify({
           fname:fname,
           lname:lname,
           email:email,
           message:message




        })
}).then(function(){
    response.innerHTML="Form submitted Successfully...."
    form.reset();
}).catch(function(){
    response.innerHTML="ERROR occured...."
})

})