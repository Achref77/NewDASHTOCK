const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nom: {
    type: String
    // required: true
  },
  prenom: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  role: ["GERANT", "Admin", "Magazinier"]
});
module.exports = User = mongoose.model("user", UserSchema);
