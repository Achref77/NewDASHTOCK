const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListeSchema = new schema({
  nom: { type: String },
  prenom: { type: String },
  role: { type: String },
  telephone: { type: String },
  email: { type: String }
});

module.exports = liste = mongoose.model("liste", ListeSchema);
