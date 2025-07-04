<h1>LOGIN APP:</h1>
<h2>How to use it and what it does:</h2>
<p>1.What it does?<br>
    Allows users to signup and store their new username and password in a protected manner.</br>
    These passwords are hashed using bcrypt module and are stored in mongoDB.</br>
    Once the user signs up they can also login using the username and password credentials where upon</br>
    success a json webtoken gets returned for further future use.</br>
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
    !!Before running postman see the "Using the docker application" part!!</br>
</p>

<h2>Using the docker application</h2>
<p>
    1. Go to the terminal and run: docker pull kingcloudamazing/user_auth_service:1.0 </br>
    2. After the image is downloaded, download the mongodb.yaml and the .env file as well</br> 
       and save it in one common file.</br>
    3. Now go the common file location in the terminal and type: docker compose -f mongodb.yaml up -d</br>
    4. This will install all the mongo, mongo-express and the program containers and put them in one common network. After installing the containers it will start running them. To confirm if the application is running successfully you can type: </br> 
    docker logs (name or id of container whose image name is - kingcloudamazing/user_auth_service:1.0)</br>
    If it shows: 
        > user-auth-service@1.0.0 start </br>
        > node server.js </br>
        </br>
        MongoDB connected! </br>
        Server has started running at PORT:5000 </br>
    Your code is running successfully and you can start giving postman the user credentials.</br>
    </br>
    To view all the users just go to localhost:8081, where user:admin and password:pass to see the </br>
    users details.</br>
</p>
