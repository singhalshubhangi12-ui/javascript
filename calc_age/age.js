let form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let Birthyear=document.querySelector('#Birthyear').value  //.value is compulsary to write
    let Currentyear=document.querySelector('#Currentyear').value
    let results = document.querySelector('.results')
    if(Currentyear===''){
        results.innerHTML="enter current year"
    }
    else if(Birthyear===''){
        results.innerHTML="enter birth year"

    }
    else{
        let age=Currentyear-Birthyear
        results.innerHTML=`<div>Age is ${age}</div>`
    }



})