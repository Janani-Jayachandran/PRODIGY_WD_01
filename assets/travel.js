let user = document.getElementById("user");
let loginbtn = document.getElementById("loginbtn");
let placename = document.getElementById("placename");
let submit = document.getElementById("submit");

user.addEventListener("click", function(){
    document.querySelector(".loginpage").classList.toggle("active1");
})

loginbtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value== "" && pass.value == ""){
        alert("please fill details")
    }else{
        alert("you logged in");
        document.querySelector(".loginpage").Style.display="none"
    }
})

submit.addEventListener("click", function(){
     if(placename.value == ""){
        alert("Fill Form")
    }else{
        alert(placename.value + " Tour Booked")
    }
})