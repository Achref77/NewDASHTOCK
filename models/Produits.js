const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProduitSchema = new schema({
  reference: { type: String },
  nomProduit: { type: String },
  prixAchat: { type: String },
  prixVente: { type: String },
  poids: { type: String }
});

module.exports = Produit = mongoose.model("produit", ProduitSchema);
