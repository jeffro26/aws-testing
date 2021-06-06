# donation-message-service
This version of the application is only meant for local testing and the following commands 

#npm run start
Initialises the node application on local port 3003

#npm run start-dev
Initialises the node application on local port 3003 with watcher nodemon active. This means that as soon as any code change is detected the node server will restart and attempt to impliment the changes

#npm run test
This command will run any test specified after the word test(As long as the test file is available)

#npm run coverage
This command will produce a code coverage report within the console

How to install:
1) Pull the code
2)run 'npm install' to install all dependencies. 
3)You are now ready to begin using the app locally

How to test:
Please use post to send a POST request with the following data object:

localhost:3003/api/donations/donate

{
    "data": {
        "customerId": 850689877,
        "amount": 200.92,
        "currency": "AMERICAN DOLLARS"
    }
}

Sending another request under the same customer ID will result in a thank you message being returned.
