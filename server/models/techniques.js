const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const techniquesSchema = new Schema({
    languages : [{ type: String, required: true }],
    databases : [{ type: String, required: true }],
    techniques : [{ type: String, required: true }],
},
{ collection : 'techniques' });
 
const Techniques = mongoose.model('techniques', techniquesSchema);
module.exports = Techniques;