const SERVER = "http://localhost:3000"

$(document).ready(function(){
    const accessToken = localStorage.getItem("accessToken")
    if(accessToken){
        $("#home-page").show()
        $("#login-page").hide()
        $("#signup-page").hide()
    } else{
        $("#home-page").hide()
        $("#login-page").show()
        $("#signup-page").hide()
    }
})


function login(e) {
    e.preventDefault()
    console.log("login !")
    const email = $('#login-email').val()
    const password = $('#login-password').val()

    console.log(email, password)
    $.ajax({
        method:"POST",
        url: SERVER + "/login",
        data:{
            email, 
            password
        }
    }).done(res => {
        const accessToken = res.accessToken
        localStorage.setItem("accessToken", accessToken)
        $("#login-page").hide()
        $("#signup-page").hide()
        $("#home-page").show()
    }).fail(err => {
        console.log(err)
    })
}

function onSignIn(googleUser){
    const google_token = googleUser.getAuthResponse().id_token;
    
    $.ajax({
        method:"POST",
        url: SERVER + "/googleLogin",
        data:{
            google_token
        }
    }).done(res => {
        console.log(res)
        const accessToken = res.accessToken
        localStorage.setItem("accessToken", google_token)
        $("#login-page").hide()
        $("#signup-page").hide()
        $("#home-page").show()
    }).fail(err => {
        console.log(err)
    })
}

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
// }


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

function signupPage(){
    $("#signup-page").show()
    $("#login-page").hide()
    $("#home-page").hide()
}

function logout(){
    $("#login-page").show()
    $("#home-page").hide()
    localStorage.removeItem('accessToken');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
