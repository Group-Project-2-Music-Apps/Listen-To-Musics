const SERVER = "http://localhost:3000"

$(document).ready(function(){
    const token = localStorage.getItem("token")
    if(token){
        $("#home-page").show()
        $("#login-page").hide()
        $("#signup-page").hide()
    } else{
        $("#home-page").hide()
        $("#login-page").show()
        $("#signup-page").show()
    }
})


function login(e) {
    e.preventDefault()
    console.log("login !")
    const email = $('#login-email').val()
    const password = $('#login-password').val()

    console.log(email,password)
    $.ajax({
        method:"POST",
        url: SERVER + "/login",
        data:{
            email, 
            password
        }
    }).done(res => {
        const token = res.token
        localStorage.setItem("token", token)
        $("#login-page").hide()
        $("#signup-page").hide()
        $("#home-page").show()
    }).fail(err => {
        console.log(err)
    })
}

function signup(e) {
    e.preventDefault()
    const email = $('#signup-email').val()
    const password = $('#signup-password').val()

    $.ajax({
        method:"POST",
        url: SERVER + "/signup",
        data:{
            email, 
            password
        }
    }).done(res => {
        console.log(res)
        $("#login-page").show()
        $("#signup-page").hide()
        $("#home-page").hide()
    }).fail(err => {
        console.log(err)
    })
}

function onSignIn(googleUser){
    const google_token = googleUser.getAuthResponse().id_token;
    
    $.ajax({
        method:"POST",
        url: SERVER + "/googlelogin",
        data:{
            google_token
        }
    }).done(res => {
        const token = res.token
        localStorage.setItem("token", google_token)
        $("#login-page").hide()
        $("#home-page").show()
    }).fail(err => {
        console.log(err)
    })
}

function signupPage(){
    $("#signup-page").show()
    $("#login-page").hide()
    $("#home-page").hide()
}

function logout(){
    $("#login-page").show()
    $("#home-page").hide()
    localStorage.removeItem('token');
}
