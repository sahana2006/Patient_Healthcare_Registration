require("dotenv").config();

const app = require("./app"); // Import the Express app
const connectDB = require("./config/db"); // Import the database connection function

connectDB(); // Establish database connection

const PORT = process.env.PORT || 5000; // uses environment variable or defaults to 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
