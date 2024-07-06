const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true, 
    },
  },
  { timestamps: { createdAt: "", updatedAt: "" } }
);
userSchema.index({ email: 1 });
const user = new mongoose.model("user", userSchema);

module.exports = user;
