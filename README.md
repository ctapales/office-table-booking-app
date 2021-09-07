# Office Table Booking 
A web application that allows employees to reserve a shared desk in an office for a (half) day.

## Table of Contents
- [Requirements](#requirements)
- [Cloning the Repo](#cloning-the-repo)
- [Running Front-end with Dependencies](#running-front-end-with-dependencies)
- [Running Back-end with Dependencies](#running-back-end-with-dependencies)

## Requirements
List of tools when running the application
### Front-end (React)
- Node 14.0.0 or higher
- Visual Studio Code IDE
### Back-end (Spring + MySQL)
- JDK 11.0.0 or higher
- XAMPP
- IntelliJ IDE

## Cloning the Repo
To clone and run the project, kindly follow these steps:
1. Create a folder ***OTB_App***
1. Open the folder then right click and choose ***Git Bash Here*** This will open a bash terminal.
1. Run the codes below to begin cloning.
    ```
    git clone git@github.com:ctapales/office-table-booking-app.git .
    ``` 

## Running Front-end with Dependencies
React contains node modules that are not included in the repository. In order to fetch all dependencies, kindly follow these steps:
1. Open the ***OTB_App*** folder then right click and choose ***Git Bash Here*** This will open a bash terminal.
    ```
    cd react-app
    npm install
    npm start
    ```
This will open the application on your default browser. This usually open on localhost:3000/

## Running Back-end with Dependencies
Spring dependencies will only appear on the IntelliJ IDE. Kindly follow these steps:
### Preparing MySQL
1. Open ***XAMPP Control Panel*** and start ***Apache*** and ***MySQL***.
### Preparing Spring
1. Open the IntelliJ IDE then click ***Open***.
1. Choose the pom.xml under the rest-service folder.
    ```
    <file path>/OTB_App/rest-service/pom.xml
    ```
1. After clicking ***Ok*** a prompt will appear. Open it as ***Open as Project*** This will open the Spring project in the IDE.

    > #### Checking the SDK
    > We need to create dependencies based on your JDK. On the IDE's navbar, click ***File*** > ***Project Structure***. This will open your Project Options.
    > Under the ***Project Settings*** click ***Project***.
    > Make sure that the Project SDK contains your SDK. If not, click the dropdown and find your desired SDK.
    > Close the Project Options.
1. Open the ***RestServiceApplicatin.java*** on the IDE. You can see this on the left sidebar or click ***Alt + 1***.
1. When openned, click ***Ctrl + Shift + F10***.

The last step will run the Spring application on Tomcat and can now be accessible through localhost:8080/.


















