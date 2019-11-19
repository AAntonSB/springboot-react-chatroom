# springboot-react-chatroom
 Using Spring Boot with WebSocket API  and React with Material-UI to build a simple group and private chat application
 
 Features
===============
* User login/logout
* Group chat  
* Private messaging
* Presence tracking and push notifications when users join / leave / send messages


 Server Configuration: 
 ========================
Spring boot configurations to configure websocket connection with STOMP and sockJS
 

Spring Boot Setup Prerequisites 
======================
 JDK 8
 
 Spring Boot
 
 STS or Eclipse  
 
 Tomcat(embedded with Spring) 
 
 Maven


Client Configuration: 
========================
The front end of the application has been developed using react js components.

* The connect() function uses SockJS and stomp client to connect to the /ws endpoint that we configured in Spring Boot.
* Upon successful connection, the client subscribes to /topic/public destination and tells the user’s name to the server by sending a    message to the /app/addUser destination.
* The stompClient.subscribe() function takes a callback method which is called whenever a message arrives on the subscribed topic.
* Rest of the code is used to display and format the messages on the screen.

React Setup Prerequisites and Dependencies
==========================
* Node
* NPM
* create-react-app
* material-ui
* react-stomp and sockjs-client
* Visual Studio Code

Setting up the proxy
=========================

To have the Webpack development server proxy our requests to our Server, we just need to add the following line to package.json:

<code>"proxy": "http://localhost:8080/", </code>

Finally
=============
Boot both the Server and Client apps and you're in the business. Enter any username and click Start Chatting button to enter into the chat room. If no one is available in the chat room, then you can open the app in two tabs, login with different usernames and start sending messages. You will see the below chat room UI

![alt text](https://github.com/RatneshChauhan/springboot-react-chatroom/blob/master/Client/chat-box.png "Chat Room")

Author
=============
Ratnesh Chauhan, Full Stack Developer

Note: Everything is tested on Windows environment on Laptop device

License
==============
The MIT License (MIT)

Copyright (c) 2018 Ratnesh Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy of this application and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.


