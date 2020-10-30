POST REGISTER

URL /users/register

Method:

POST

Required:

email=[string] password=[string]

Success Response:

Code: 201
Content:
{ "msg" : "successfully create new user" }    
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content:
{
    "errors": [
        "null"
    ]
}
Code: 400 Bad Request
Content:

{
    "errors": [
        "password should be minimum 6 characters"
    ]
}
POST LOGIN

URL /users/login

Method:

POST

Required:

email=[string] password=[string]

Success Response:

Code: 200
Content:
{ 
    "token" : "aosjdnaszd904987464562133zdcas
              dwqeasdqwe48915616489787qwedxac65"
}    
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content:
{
    "errors": [
        "null"
    ]
}
Code: 401 Unauthorized
Content:

{
    "errors": [
        "invalid email or password"
    ]
}
GET LYRIC

URL /lyrics

Method:

GET

Required:

singer=[string] song=[string]

Success Response:

Code: 200
Content:
{
"weatherData": {
    "coord": {
        "lon": 106.99,
        "lat": -6.23
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 304.47,
        "feels_like": 309.53,
        "temp_min": 303.15,
        "temp_max": 305.93,
        "pressure": 1011,
        "humidity": 70
    },
    "visibility": 7000,
    "wind": {
        "speed": 2.1,
        "deg": 0
    },
    "clouds": {
        "all": 20
    },
    "dt": 1604021031,
    "sys": {
        "type": 1,
        "id": 9384,
        "country": "ID",
        "sunrise": 1604010360,
        "sunset": 1604054713
    },
    "timezone": 25200,
    "id": 1649378,
    "name": "Bekasi",
    "cod": 200
}
}

Error Response:

Code: 500 INTERNAL SERVER ERROR
Content:
{
    "errors": [
        "null"
    ]
}
Code: 401 Unauthorized
Content:

{
  "cod": 401,
  "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
}
GET WEATHERS

URL /lyrics

Method:

GET

Required: artist=[string] title=[string]

Success Response:

Code: 200
Content:
{
"lyrics": "I will leave my heart at the door\r\nI won't say a word\r\nThey've all been said before, you know\r\nSo why don't we just play pretend\r\nLike we're not scared of what is coming next\r\nOr scared of having nothing left\n\n\n\nLook, don't get me wrong\n\nI know there is no tomorrow\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?\n\n\n\nI don't need your honesty\n\nIt's already in your eyes \n\nAnd I'm sure my eyes they speak for me\n\nNo one knows me like you do\n\nAnd since you're the only one that matters\n\nTell me who do I run to?\n\n\n\nLook, don't get me wrong\n\nI know there is no tomorrow\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?\n\n\n\nLet this be our lesson in love\n\nLet this be the way we remember us\n\nI don't wanna be cruel or vicious\n\nAnd I ain't asking for forgiveness\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?"
}
Error Response:

Code: 404 NOT FOUND
Content:
{
"msg": "Request failed with status code 404"
}