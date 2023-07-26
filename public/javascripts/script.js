
function donoOffKaro(){
    document.querySelectorAll("#files form")
    .forEach(function(prm){
     prm.style.display = "none"
    })
}

document.querySelector("#fileicon")
.addEventListener("click", function(){
    donoOffKaro();
    document.querySelector("#fileform").style.display="initial"
})

document.querySelector("#foldericon")
.addEventListener("click",function(){
    donoOffKaro();
    document.querySelector("#folderform").style.display="initial"
})

document.querySelector("#refresh")
.addEventListener("click",function(){
    donoOffKaro();
})