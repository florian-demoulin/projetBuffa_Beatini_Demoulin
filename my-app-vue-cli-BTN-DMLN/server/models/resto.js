var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RestoSchema = new Schema({
  borough: String,
  cuisine: String
});

var Resto = mongoose.model("Resto", RestoSchema);
module.exports = Resto;