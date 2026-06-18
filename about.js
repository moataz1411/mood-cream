function changeimg(){
    const img=document.getElementById("mainimage");
    if (img.src.includes("img1")){
        img.src="img2.jpeg";
    }
    else{img.src="img1.jpeg";}
}
function facts(){
    document.getElementById("fact").innerText="My dream, which I desperately want to achieve, is to become a neurosurgeon, but I'm actually afraid of blood! 😂";
}
function theme(){
    const body=document.body;
if(body.style.background==="rgb(255, 214, 231)"){
    body.style.background="#fff3a6";
}
else{
    body.style.background="#ffd6e7";
}
}