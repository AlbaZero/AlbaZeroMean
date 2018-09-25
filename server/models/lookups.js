const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const lookupsSchema = new Schema({
    languages : [{ type: String, required: true }],
    databases : [{ type: String, required: true }],
    techniques : [{ type: String, required: true }],
},
{ collection : 'lookups' });
 
const Lookups = mongoose.model('lookups', lookupsSchema);
module.exports = Lookups;