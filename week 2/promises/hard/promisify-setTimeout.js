function mytimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(()=>
        resolve(),duration)
    })
    console.log(p);
    return p;
}

const wait = mytimeout(3000)
wait.then(()=>{
    console.log("this is after 3 seconds");
})

console.log("hip hip hurray!")