let user=prompt("enter s , w , g");
let cpuI=Math.floor(Math.random()*3); //generates 0,1,2
let cpu=["s","w","G"][cpuI];
const match=(cpu,user)=>{     //function
    if (cpu===user){
        return 0;
    }
    else if(cpu==="s"&& user==="w"){

    
        return "cpu";
    }
    else if(cpu==="s"&& user==="g"){
        return "user";
    }
    else if(cpu==="w"&& user==="s"){
        return "user";
    }
    else if(cpu==="g"&& user==="s"){
        return "cpu";
    }
    else if(cpu==="w"&& user==="g"){
        return "user";
    }
    else if(cpu==="g"&& user==="w"){
        return "cpu";
    }





}
//call

let result=match(cpu,user);
if(result=="cpu"){
    console.log("winner is cpu");
}else if(result=="user"){
    console.log("winner is user");
}
else{
    console.log("its a draw");
}