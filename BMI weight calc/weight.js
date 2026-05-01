let form=document.querySelector('form')
//if height is written here empty value is assigned after refresh
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let result=document.querySelector('.results')
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML="enter valid height"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML="enter valid weight"
    }
    else{
        let bmi=(height/((weight*weight)/10000))
        result.innerHTML=`<span style="padding-top:20px">BMI = ${bmi}</span>`
    }

})