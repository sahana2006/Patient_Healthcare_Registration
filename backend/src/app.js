const express = require("express"); // Import Express framework
const path = require("path"); // Import path module for handling file paths
const session = require("express-session"); // Import express-session for session management
const helmet = require("helmet"); // Import Helmet for security headers
const morgan = require("morgan"); // Import Morgan for logging HTTP requests

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
  }),
);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Import authentication middleware
const requireAuth = require("./middlewares/auth.middleware");
// Import role-based access control middleware
const requireRole = require("./middlewares/role.middleware");
// Import user model to ensure it's registered with Mongoose
const User = require("./modules/users/user.model");

app.get("/", (req, res) => {
  res.render("landing", { title: "Landing" });
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/signup", (req, res) => {
  res.render("auth/signup");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Step 1: Validate input
    if (!name || !email || !password) {
      return res.send("All fields are required");
    }

    // Step 2: Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    // Step 3: Create new user (PATIENT by default)
    const user = new User({
      name,
      email,
      password,
    });

    // Step 4: Save user to MongoDB
    await user.save();

    // Step 5: Redirect to login
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.send("Signup failed");
  }
});

// Login route to authenticate users
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.send("Email and password are required");
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.send("Invalid credentials");
    }

    // 3. Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.send("Invalid credentials");
    }

    // 4. Create session
    req.session.user = {
      id: user._id,
      role: user.role,
      name: user.name,
    };

    // 5. Redirect based on role
    if (user.role === "PATIENT") {
      return res.redirect("/patient/dashboard");
    }

    if (user.role === "DOCTOR") {
      return res.redirect("/doctor/dashboard");
    }

    if (user.role === "RECEPTIONIST") {
      return res.redirect("/receptionist/dashboard");
    }

    // fallback (should not happen)
    res.send("Role not recognized");
  } catch (error) {
    console.error(error);
    res.send("Login failed");
  }
});

app.get("/patient/dashboard", requireAuth, requireRole("PATIENT"), (req, res) => {
  res.send(`Patient Dashboard - Welcome ${req.session.user.name}`);
});

app.get("/doctor/dashboard", requireAuth, requireRole("DOCTOR"), (req, res) => {
  res.send("Doctor Dashboard");
});

app.get("/receptionist/dashboard", requireAuth, requireRole("RECEPTIONIST"), (req, res) => {
  res.send("Receptionist Dashboard");
});

module.exports = app; // Export the app for use in server.js
