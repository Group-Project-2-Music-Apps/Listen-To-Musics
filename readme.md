**POST REGISTER**

* **URL**
  /users/register

* **Method:**

  `POST` 

* **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json 
    { "msg" : "successfully create new user" }    
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errors": [
            "null"
        ]
    }
 * **Code:** 400 Bad Request <br />
    **Content:** 
    ```json
    {
        "errors": [
            "password should be minimum 6 characters"
        ]
    }

**POST LOGIN**
* **URL**
  /users/login

* **Method:**

  `POST` 

* **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json 
    { 
        "token" : "aosjdnaszd904987464562133zdcas
                  dwqeasdqwe48915616489787qwedxac65"
    }    
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errors": [
            "null"
        ]
    }
 * **Code:** 401 Unauthorized <br />
    **Content:** 
    ```json
    {
        "errors": [
            "invalid email or password"
        ]
    }

**GET WEATHERS**
* **URL**
  /weathers

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
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
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errors": [
            "null"
        ]
    }
 * **Code:** 401 Unauthorized <br />
    **Content:** 
    ```json
    {
      "cod": 401,
      "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
    }

**GET LYRICS**
* **URL**
  /lyrics

* **Method:**

  `GET` 

* **Required:**
  `artist=[string]`
  `title=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "lyrics": "I will leave my heart at the door\r\nI won't say a word\r\nThey've all been said before, you know\r\nSo why don't we just play pretend\r\nLike we're not scared of what is coming next\r\nOr scared of having nothing left\n\n\n\nLook, don't get me wrong\n\nI know there is no tomorrow\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?\n\n\n\nI don't need your honesty\n\nIt's already in your eyes \n\nAnd I'm sure my eyes they speak for me\n\nNo one knows me like you do\n\nAnd since you're the only one that matters\n\nTell me who do I run to?\n\n\n\nLook, don't get me wrong\n\nI know there is no tomorrow\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?\n\n\n\nLet this be our lesson in love\n\nLet this be the way we remember us\n\nI don't wanna be cruel or vicious\n\nAnd I ain't asking for forgiveness\n\nAll I ask is\n\n\n\nIf this is my last night with you\n\nHold me like I'm more than just a friend\n\nGive me a memory I can use\n\nTake me by the hand while we do what lovers do\n\nIt matters how this ends\n\n'Cause what if I never love again?"
    }
  
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
    "msg": "Request failed with status code 404"
    }

**GET SONGS**
* **URL**
  /songs

* **Method:**

  `GET` 

* **Required:**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "songs": [
        {
            "id": 2,
            "title": "Just the Way You Are",
            "artist": "Bruno Mars",
            "album": "Doo-Wops & Hooligans",
            "preview": "https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=9a9d898bd6cb4ca4bd44263c9523deb6",
            "picture": "https://i.scdn.co/image/ab67616d0000b27378c6c624a95d1bd02ba1fa02",
            "lyrics": "Oh her eyes her eyes \nMake the stars look like they're not shining. \nHer hair , her hair \nfalls perfectly without her trying \nShe's so beautiful and I tell her every day \n\n\n\nI know, I know \n\nWhen I compliment her she wont believe me \n\nAnd it's so, it's so \n\nSad to think she don't see what I see \n\n\n\nBut every time she asks me 'Do I look okay?' I say \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\nCause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\nJust the way you are \n\n\n\nHer lips, her lips \n\nI could kiss them all day if she'd let me \n\n\n\nHer laugh, Her laugh \n\nShe hates but I think it's so sexy \n\n\n\nShe's so beautiful and i tell her every day \n\n\n\nOh you know, you know, you know I'd never ask you to change \n\nIf perfect is what you're searching for \n\nThen just stay the same \n\n\n\nSo don't even bother asking if you look okay \n\nYou know I say \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\nCause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\njust the way you are \n\n\n\nThe way you are \n\nThe way you are \n\nGirl you're amazing \n\nJust the way you are \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\n'Cause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\nJust the way you are \n\n\n\nYeaaaah",
            "user_id": 1,
            "createdAt": "2020-10-30T07:25:05.896Z",
            "updatedAt": "2020-10-30T07:25:05.896Z"
        }
  
* **Error Response:**
  * **Code:** 401 Unauthorized<br />
    **Content:** 
    ```json
    {
      "errors": [
          "you do not have access to this page"
      ]
    }

**POST SONGS**
* **URL**
  /songs

* **Method:**

  `POST` 

* **Required:**
  `title=[string]`
  `artist=[string]`
  `album=[string]`
  `preview=[string]`
  `lyrics=[string]`
  `picture=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "song": {
        "id": 6,
        "title": "It's My Life",
        "artist": "Bon Jovi",
        "album": "Crush",
        "preview": "",
        "lyrics": "This ain't a song for the broken-hearted\nNo silent prayer for the faith-departed\nI ain't gonna be just a face in the crowd\nYou're gonna hear my voice\nWhen I shout it out loud\nIt's my life\nIt's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\nIt's my life\nThis is for the ones who stood their ground\nIt's for Tommy and Gina who never backed down\nTomorrow's getting harder, make no mistake\nLuck ain't enough\nYou've got to make your own breaks\nIt's my life\nAnd it's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want…",
        "picture": "",
        "user_id": 1,
        "updatedAt": "2020-10-30T07:46:52.931Z",
        "createdAt": "2020-10-30T07:46:52.931Z"
    }
}
  
* **Error Response:**
  * **Code:** 401 Unauthorized<br />
    **Content:** 
    ```json
    {
      "errors": [
          "you do not have access to this page"
      ]
    }

**GET SONGS**
* **URL**
  /songs

* **Method:**

  `GET` 

* **Required:**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "songs": [
        {
            "id": 2,
            "title": "Just the Way You Are",
            "artist": "Bruno Mars",
            "album": "Doo-Wops & Hooligans",
            "preview": "https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=9a9d898bd6cb4ca4bd44263c9523deb6",
            "picture": "https://i.scdn.co/image/ab67616d0000b27378c6c624a95d1bd02ba1fa02",
            "lyrics": "Oh her eyes her eyes \nMake the stars look like they're not shining. \nHer hair , her hair \nfalls perfectly without her trying \nShe's so beautiful and I tell her every day \n\n\n\nI know, I know \n\nWhen I compliment her she wont believe me \n\nAnd it's so, it's so \n\nSad to think she don't see what I see \n\n\n\nBut every time she asks me 'Do I look okay?' I say \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\nCause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\nJust the way you are \n\n\n\nHer lips, her lips \n\nI could kiss them all day if she'd let me \n\n\n\nHer laugh, Her laugh \n\nShe hates but I think it's so sexy \n\n\n\nShe's so beautiful and i tell her every day \n\n\n\nOh you know, you know, you know I'd never ask you to change \n\nIf perfect is what you're searching for \n\nThen just stay the same \n\n\n\nSo don't even bother asking if you look okay \n\nYou know I say \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\nCause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\njust the way you are \n\n\n\nThe way you are \n\nThe way you are \n\nGirl you're amazing \n\nJust the way you are \n\n\n\nWhen I see your face \n\nThere's not a thing that I would change \n\n'Cause you're amazing \n\nJust the way you are \n\n\n\nAnd when you smile \n\nThe whole world stops and stares for a while \n\n'Cause girl you're amazing \n\nJust the way you are \n\n\n\nYeaaaah",
            "user_id": 1,
            "createdAt": "2020-10-30T07:25:05.896Z",
            "updatedAt": "2020-10-30T07:25:05.896Z"
        }
  
* **Error Response:**
  * **Code:** 401 Unauthorized<br />
    **Content:** 
    ```json
    {
      "errors": [
          "you do not have access to this page"
      ]
    }

**DELETE SONGS**
* **URL**
  /songs

* **Method:**

  `DELETE` 

* **Required:**
  `ID=[INTEGER]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {"msg":"successfully deleted the song"}
  
* **Error Response:**
  * **Code:** 404 NOT FOUND<br />
    **Content:** 
    ```json
    {"msg":"song not found"}

