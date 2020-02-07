const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListeSchema = new schema({
  CodeAbare: { type: String},
  StockInitial: { type: String },
  StockMinimum: { type: String },
  StockSecurite: { type: String },

});

module.exports = liste = mongoose.model("liste", ListeSchema);
