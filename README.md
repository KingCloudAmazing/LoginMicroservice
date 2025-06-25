<h1>LOGIN APP:</h1>
<h2>How to use it and what it does:</h2>
<p>1.What it does?<br>
    Allows users to signup and store their new username and password in a protected manner
    These passwords are hashed using bcrypt module and are stored online in mongoDB ATLAS.
    Once the user signs up they can also login using the username and password credentials where upon
    success a json webtoken gets returned for further future use.
</p>
<p>2.How to use it:
    The requests made to the server must be through POST requests(you can use POSTMAN for this)<br>
    for signup: http://localhost:5000/api/auth/signup<br>
    for login: http://localhost:5000/api/auth/login<br>
    and the request data must be of the JSON format<br>
    ex:{<br>
        "username":"newUser123",<br>
        "password":"user_123"<br>
    }<br>
</p>