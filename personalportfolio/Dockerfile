# Build stage
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies (better layer caching)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY . .

# Build the project
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port and run the app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
