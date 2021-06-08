# donation-message-service
This application handles donations given in from any api.

Currently this application only functions locally with work in progress to:

1) Convert the functionality to support the lambda gateway written in the stack file by converting already written code in the src folder

2) Unit test new aws cdk code

3) Retire old server code in Main branch once code has been successfully onto AWS.

Available Commands

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

2) Run 'npm install' to install all dependencies. 

3) You are now ready to begin using the app locally

How to test:

Please use postman(or any equivalent) to send a POST request with the following data object:

localhost:3003/api/donations/donate

{
    "data": {
        "customerId": 850689877,
        "amount": 200.92,
        "currency": "AMERICAN DOLLARS"
    }
}

Sending another request under the same customer ID will result in a thank you message being returned.
