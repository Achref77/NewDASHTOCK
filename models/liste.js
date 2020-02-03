const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListeSchema = new schema({
  nom: { type: String },
  prenom: { type: String },
  role: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = liste = mongoose.model("liste", ListeSchema);
