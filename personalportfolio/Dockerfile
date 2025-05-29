

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . .

# Build the project with Maven and Java 21
RUN mvn clean package -DskipTests

# Run phase: Use lightweight JDK image to run the JAR
FROM openjdk:21-jdk-slim

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Expose the port and run the Spring Boot app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
