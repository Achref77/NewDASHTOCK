const mongoose = require("mongoose");
const schema = mongoose.Schema;

const StockSchema = new schema({
  nomClient: { type: String },
  prenomClient: { type: String },
  telephoneClient: { type: String },
  emailClient: { type: String }
});

module.exports = Client = mongoose.model("client", ClientSchema);
