const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["PATIENT", "DOCTOR", "RECEPTIONIST"],
      default: "PATIENT",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// 🔐 Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    // Prevent re-hashing if password is not changed
    return;
  }

  const salt = await bcrypt.genSalt(10); // Generate salt which means the complexity of the hash
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
});

// 🔍 Compare password (used during login later)
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
