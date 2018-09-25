const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const experienceSchema = new Schema({
  name: { type: String, required: true },
  company : { type: String, required: true },
  startdate : { type: String, required: true },
  enddate : { type: String, required: true },
  role : { type: String, required: true },
  technique : { type: String, required: true },
  description : { type: String, required: true }
}, 
{ collection : 'experiences' });
 
const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;