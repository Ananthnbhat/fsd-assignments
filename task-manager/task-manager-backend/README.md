Download or clone this project first.

## Pre-requisites

### Install Jenkins

Go to [this](https://jenkins.io/doc/pipeline/tour/getting-started/) website and follow the instructions to install Jenkins.
Do the first time setup of Jenkins.

### To setup CI using Jenkins, refer the screenshots given in this repository.

After Jenkins is setup, it will automatically pull the code from the Github whenever there is a new commit and creates JAR file required to run the application.

**Note :** To trigger CI whenever there is a new commit, Github webhook needs to be configured. Follow the instructions given in [this](https://dzone.com/articles/adding-a-github-webhook-in-your-jenkins-pipeline) website to set it up, if required.

### To setup docker in the system, please refer the below website.

[Getting started with Docker](https://docs.docker.com/machine/get-started/)

## Running and deploying the application for the first time.

Use the below commands to 1. Create the JAR file and 2. Deploy it into Docker.

`mvn clean install`

`docker-compose up` or `docker-compose up --build`

The above docker command will work based on the assumption that, you have not started/created any of the containers used in this project, docker daemon is up and running and you have not made any changes to the Dockerfile and docker-compose.yml file.

This single docker command will build the application and deploy it into the specified port in the localhost.

Now you should be able to see the application running on [http://localhost:8080](http://localhost:8080)

### If you make any changes to code, you will need to restart the containers, to that end, use the below command.

`docker-compose up --force-recreate --build`

## Some alternatives

- You can also run docker compose in detached mode and follow the instructions in [this](https://docs.docker.com/compose/production/) site to deploy the changes.
- You use `docker-compose build` to build the containers in which will build the new image if there is any code change and then use the `docker-compose up` command to deploy the app.
- You can have the `docker-compose up` command as part of CI, i.e. Jenkinsfile. So, that when Jenkins pull the creates the JAR file, the next command can deploy the code into Docker.

This is the method I have followed. There are many other ways in which CI/CD can be implemented using Jenkins and Docker. Happy coding 🙂  


