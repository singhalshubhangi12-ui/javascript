// create
let p=new Promise(function(resolve,reject){
    //do task
    setTimeout(function(){
        console.log("stated")
        resolve()
    },2000)
})

//call
p.then(function(){
    console.log("promise consumed")
})