As the attached project was not downloadable, I have created my own project in which I have implemented CI/CD.

Download or clone the project first.

## Pre-requisites


### To setup CI using Jenkins, refer the screenshots given in this repository.

After Jenkins is setup, it will automatically pull the code from the Github whenever there is a new commit and creates JAR file required to run the application.

### To setup docker in the system, please refer the below website.

[Getting started with Docker](https://docs.docker.com/machine/get-started/)

## Running and deploying the application for the first time.

Use the below commands to 1. Create the JAR file and 2. Deploy it into Docker.

`mvn clean install`

`docker-compose up` or `docker-compose up --build`

The above docker command will work based on the assumption that, you have not started/created any of the containers used in this project, docker daemon is up and running and you have not made any changes to the Dockerfile and docker-compose.yml file.

This single docker command will build the application and deploy it into the specified port in the localhost.

Now you should be able to see the application running on [http://localhost:8080](http://localhost:8080)


### If you made any changes to code, you will need to restart the containers, to that end, use the below command.

`docker-compose up --force-recreate --build`

