const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const profilesSchema = new Schema({
  name: { type: String, required: true },
  keywords : [{ type: String, required: true }],
  description : { type: String, required: true },
  competencies : [{ type:String}],
  educations : [{ type: String, required: true }],
  languages : [{ type: String, required: true }],
  programmingLanguages : [{ type: String, required: true }],
  databases : [{ type: String, required: true }],
  techniques : [{ type: String, required: true }],
  missions : [{
    company : { type: String, required: true },
    startdate : { type: String, required: true },
    enddate : { type: String, required: true },
    role : { type: String, required: true },
    technique : [{ type: String, required: true }],
    description : { type: String, required: true }}]
},
{ collection : 'profiles' });
 
const Profiles = mongoose.model('Profiles', profilesSchema);
module.exports = Profiles;