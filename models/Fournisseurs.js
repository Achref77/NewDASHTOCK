const mongoose = require("mongoose");
const schema = mongoose.Schema;

const FournisseurSchema = new schema({
  nomFournisseur: { type: String },
  emailFournisseur: { type: String },
  telephoneFournisseur: { type: String }
});

module.exports = Fournisseur = mongoose.model("fournisseur", FournisseurSchema);
