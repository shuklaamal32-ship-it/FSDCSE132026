const myPromise = new Promise((resolved,reject)=>{
    let username = "Ashukla22";
    let password = "12345";
    if(username == "Ashukla22" && password == "12345" ){
        resolved("success");
    }
    else{
        reject("Invalid user")
    }
})

// myPromise.then((msg)=>{
//     console.log(msg)
// })
// .catch(msg=>{
//     console.log(msg)
// })
// .finally(()=>console.log("All resource has been closed"))

async function loginHandler(){
    try{
         const loginStatus = await myPromise;
         console.log(loginStatus)
    }catch(e){
        console.log(e)
    }finally{
        console.log("Closing all open resourses")
    }
}

loginHandler();