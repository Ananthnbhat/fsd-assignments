# Maven assignment

Download or clone the **customArchetype** project first.

We will use this archetype project to build a new project.

## Creting a new project

In the project directory, you can run:

### `mvn clean install`

Installs all the required dependencies for the archetype project from pom.xml. 

### `mkdir newProject`
### `cd newProject`

Creates a new folder where the new project will be created using the archetype.
Then go into that folder.

### `mvn archetype:generate -DgroupId=com.new.app -DartifactId=my-app -DarchetypeGroupId=asgmnt.mvn -DarchetypeArtifactId=customArchetype -DarchetypeVersion=1.0`

This command is used to create the new project with groupId=com.new.app and artifactId=my-app. This is your choice. You can give your own values for the artifactId and groupId. But the values for archetypeArtifactId, archetypeGroupId and archetypeVersion should be same as the artifactId, groupId & version of the archetype project - customArchetype (from pom.xml).

Now the new project would have been created with the description "A basic starter template using springboot, jpa data, thymeleaf and MVC" and springboot, jpa, thymeleaf and MVC as dependencies in the new project's pom file as per the requirement.

### `cd my-app`

Go into the new project's directory.

### `mvn compile`

Compiles the project.

### `mvn package`

Packages the built project. Other alternative is `mvn install` or `mvn clean install`.

### `mvn spring-boot:run`

Executes the jar file created in the previous command.
Now open (https://localhost:8080/app)[https://localhost:8080/app] in the browser window to see the app in action.

### `mvn clean`

Cleans all the compiled class files and jar files in target folder.

Go to the pom file of the `my-app` project and change the value in the packaging tag from jar to war, to create a war file.

## Deploying locally

### 1. `mvn spring-boot:run`

Compiles the project, creates the war file and deploys in the tomcat server.

Again you can visit (https://localhost:8080/app)[https://localhost:8080/app] in the browser window to see the app in action.

### 2. Using Tomcat server
Download the Tomcat from (here)[https://tomcat.apache.org/download-80.cgi]

Before accessing the Tomcat manager web interface, set the username and password in $CATALINA_HOME/conf/tomcat-users.xml

`<tomcat-users>
			  <role rolename="manager-gui"/>
			  <user username="some_username" password="some_password" roles="manager-gui"/>
</tomcat-users>` 

Then in the bin folder click startup.bat or startup.sh to start Tomcat server.

You can also change the port where the Tomcat is run, in $CATALINA_HOME/conf/server.xml - search for '8080'.  Change it to a port that isn't in use, and is greater than 1024, as ports less than or equal to 1024 require superuser access to bind to.

Open http://localhost:8080 (assuming 8080 is the port) in the browser.

Then use one of the options available in Tomcat web interface to deploy the WAR file and access in http://localhost:xxxx/app
For more info, (visit Tomcat official website)[https://tomcat.apache.org/tomcat-4.1-doc/RUNNING.txt].

### 3. Using Jetty server



       




