const SERVER = "http://localhost:3050"

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


function getWeather() {
  $.ajax({
    url: `${baseUrl}/weathers/`,
    method: 'GET',

  })
  .done(data => {
    $("#icon").empty();
    const condition = data.weatherData.weather[0].main;
    const temperature = Math.floor((Number(data.weatherData.main.temp) - 270 )).toString() + '°C';
    const wind = (data.weatherData.wind.speed).toString() + 'm/s';
    const location = data.weatherData.name;
    const icon = data.weatherData.weather[0].icon

    //$("#condition").text(condition)
    $("#temperature").text(temperature)
    $("#wind").text(`Wind speed:${wind}`)
    $("#location").text(`Welcome to ${location}`)
    //
    $("#icon").prepend(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <h4 id="condition" class="text-light"> ${condition}</h4> `)
  })
  .fail(err => {
    showErrorToastMessage(err.responseJSON.errors.join('\n'))
  })
}

let artist = null
let songname = null
 
function getLyric(){
  $.ajax({
    method: "GET",
    url: `http://localhost:3050/songs/${artist}/${songname}`,
    headers: {
      token: localStorage.token
    }
  })
  .done(result => {
    if(!result.lyrics.lyrics) {
      $('#add-lyrics').val('lyric is unavailable at this moment')
    } else {
      $('#add-lyrics').val(result.lyrics.lyrics);
    }
  })
  .fail(err => {
    showErrorToastMessage('lyrics not found')
  })
}
 
 
function spotify(){
  const track = $("#search-keyword").val();
  $.ajax({
    method: "GET",
    url: `http://localhost:3050/songs/search/${track}`,
    headers: {
      token: localStorage.token
    }
  })
  .done(data => {
    artist = data.musicData.album.artists[0].name
    songname = data.musicData.name
    $('#add-artist').val(data.musicData.album.artists[0].name)
    $('#add-title').val(data.musicData.name)
    $('#add-album').val(data.musicData.album.name)
    $('#add-sound').val(data.musicData.preview_url)
    $('#add-picture').val(data.musicData.album.images[0].url)
    getLyric()
  })
  .fail(err => {
    showErrorToastMessage(err.responseJSON.errors.join('\n'))
  })
}