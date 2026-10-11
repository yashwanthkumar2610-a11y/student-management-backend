const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "student_management"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("MySQL connected successfully!");
});

// Test backend
app.get("/", (req, res) => {
  res.send("Student Management Backend is running!");
});

// Get all students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.error("DATABASE ERROR:", err.message);
      return res.status(500).json({ error: err.message });
    }
    console.log("Students from database:", results);
    res.json(results);
  });
});

// Add a student
app.post("/students", (req, res) => {
  console.log("Received student data:", req.body);

  const { rollNo, name, email, course } = req.body;

  if (!rollNo || !name || !email || !course) {
    return res.status(400).json({
      error: "Please fill in all four fields."
    });
  }

  const sql =
    "INSERT INTO students (rollNo, name, email, course) VALUES (?, ?, ?, ?)";

  db.query(sql, [rollNo, name, email, course], (err, result) => {
    if (err) {
      console.error("DATABASE ERROR:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Student added successfully!",
      id: result.insertId
    });
  });
});
// Update a student
app.put("/students/:id", (req, res) => {
  const { rollNo, name, email, course } = req.body;
  const sql =
    "UPDATE students SET rollNo = ?, name = ?, email = ?, course = ? WHERE id = ?";

  db.query(
    sql,
    [rollNo, name, email, course, req.params.id],
    (err, result) => {
      if (err) {
        console.error("DATABASE ERROR:", err.message);
        return res.status(500).json({ error: err.message });
      }

      
      res.json({ message: "Student updated successfully!" });
    }
  );
});
// Delete a student
app.get("/test-route", (req, res) => {
  res.send("Backend routes are working");
});
app.delete("/students/:id", (req, res) => {
  console.log("Delete ID received:", req.params.id);
  const sql = "DELETE FROM students WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error("DATABASE ERROR:", err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found." });
    }

    res.json({ message: "Student deleted successfully!" });
  });
});
app.all("/students/:id", (req, res) => {
  console.log("UNMATCHED REQUEST:", req.method, req.originalUrl);
  res.status(404).json({
    error: "Request reached backend, but no matching route handled it",
    method: req.method,
    url: req.originalUrl
  });
});
// Start backend server
app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});