const express = require("express"); // Import Express framework
const path = require("path"); // Import path module for handling file paths
const session = require("express-session"); // Import express-session for session management
const helmet = require("helmet"); // Import Helmet for security headers
const morgan = require("morgan");  // Import Morgan for logging HTTP requests

const app = express(); // Create an Express application

// Security headers
app.use(helmet());

// Request logging
app.use(morgan("dev"));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration 
// Stores session ID in cookie  
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Temporary routes
app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/patient/dashboard", (req, res) => {
  res.render("patient/dashboard", {
    user: { email: "patient@test.com" },
  });
});

app.get("/doctor/dashboard", (req, res) => {
  res.render("doctor/dashboard");
});

app.get("/receptionist/dashboard", (req, res) => {
  res.render("receptionist/dashboard");
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

module.exports = app; // Export the app for use in server.js
 