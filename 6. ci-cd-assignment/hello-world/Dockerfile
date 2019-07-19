FROM openjdk:latest
COPY ./target/hello-world-0.0.1-SNAPSHOT.jar /usr/src/hello-world/
WORKDIR /usr/src/hello-world
EXPOSE 8080
CMD ["java", "-jar", "hello-world-0.0.1-SNAPSHOT.jar"]
