const monk = require('monk');
const json = require('./credentials.json');
const uri = "mongodb+srv://estoque:"+json["pass_db"]+"@cluster0.efmhz.mongodb.net/estoque?retryWrites=true&w=majority";
const db = monk(uri);

module.exports = db;