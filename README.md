# Student Management System — Backend

## About the Project

The Student Management System is a web-based application developed to manage student records. This backend is built using Java and Spring Boot and connects to a MySQL database to store and manage student information.

It provides REST APIs that allow the React frontend to add, view, update, and delete student records.

## Technologies Used

- **Java 21** — Programming language
- **Spring Boot** — Backend framework
- **Spring Web** — REST API development
- **Spring Data JPA** — Database access
- **Hibernate** — Object-relational mapping (ORM)
- **MySQL** — Relational database
- **Maven** — Dependency management and build tool
- **Apache Tomcat** — Embedded web server

## Features

- Add new student records
- View all student records
- Update existing student information
- Delete student records
- Store student information in MySQL
- Communicate with the React frontend through REST APIs

## Project Structure

```text
student-management-backend/
├── src/
│   ├── main/
│   │   ├── java/com/example/student_management/
│   │   │   ├── controller/
│   │   │   │   └── StudentController.java
│   │   │   ├── model/
│   │   │   │   └── Student.java
│   │   │   ├── repository/
│   │   │   │   └── StudentRepository.java
│   │   │   ├── service/
│   │   │   │   └── StudentService.java
│   │   │   └── StudentManagementApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
├── mvnw
└── mvnw.cmd
```

## Database Configuration

This project uses MySQL.

1. Install and start MySQL.
2. Create the database:

```sql
CREATE DATABASE student_management;
```

3. Configure the database credentials using environment variables.

On Windows PowerShell, run:

```powershell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_mysql_password"
```

Replace the example password with your own MySQL password. Keep your real credentials private and never commit them to GitHub.

## Installation and Setup

### Prerequisites

- Java Development Kit (JDK) 21
- MySQL Server
- Git (optional, for cloning the repository)

### Run the Application

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Configure the database credentials as described above.
4. Run the application using the Maven Wrapper:

```powershell
.\mvnw.cmd spring-boot:run
```

5. The backend server runs at:

```text
http://localhost:8080
```

## REST API Endpoints

The base API URL is `http://localhost:8080/students`.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Retrieve all students |
| POST | `/students` | Add a new student |
| PUT | `/students/{id}` | Update an existing student |
| DELETE | `/students/{id}` | Delete a student by ID |

### Example Request — Add a Student

**POST** `/students`

```json
{
  "rollNo": "24ECE003",
  "name": "Test Student",
  "email": "test@example.com",
  "course": "ECE"
}
```

## Frontend Integration

The backend is designed to work with the React and Vite frontend.

- Frontend development URL: `http://localhost:5173`
- Backend API URL: `http://localhost:8080/students`

Cross-origin access is configured for the local frontend development URL.

## Security Notes

- Store database credentials in environment variables.
- Never upload passwords or secret configuration files to GitHub.
- Use appropriate database permissions when deploying the application.

## Project Status

The core backend operations—adding, viewing, updating, and deleting student records—have been implemented. The backend uses Spring Boot, Spring Data JPA, and MySQL.

## Author

Developed as an academic Student Management System project.
