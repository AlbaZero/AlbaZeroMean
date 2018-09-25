const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017/albazeromongo';
const url = 'mongodb://albaenterprisesdb:lXhJFVF22TmOF0OPZRS5ifnBn8pzyFUlUYP6sSmLRU9k8qTu0uXHBJJMnhsUn6DvlpJrVol2rysEagS42a5ONg==@albaenterprisesdb.documents.azure.com:10255/albazeromean?ssl=true';
const Experience = require('./models/experience');
const Profiles = require('./models/profiles');
//const Techniques = require('./models/techniques');
const Lookups = require('./models/lookups');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
app.get('/', (req, res) => {
    return res.send("ALbaZero Server");
})

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    });
})


app.post('/api/post/getAllExperience', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        Experience.find( {'name' : 'Christer Andersson'},'-name',(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

//Get Profiles
app.post('/api/profile/getAll',(req, res) => {
    mongoose.connect(url,{useNewUrlParser: true} ,function(err){
        if(err){
            console.error('getAll failed', err);
        }
        Profiles.find({},(err, profile) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: profile
            })
        });
    });
});

//Get Profile
app.post('/api/profile/getProfile',(req, res) => {
    mongoose.connect(url,{useNewUrlParser: true} ,function(err){
        if(err) throw err;
        Profiles.findOne({name : req.body.name},(err, profile) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: profile
            })
        });
    });
});

//Create Profile
app.post('/api/profile/createProfile',(req, res) => {
    mongoose.connect(url,{useNewUrlParser: true} ,function(err){
        if(err) throw err;

        var keywordsArray = [];
        for(var k in req.body.keywords){
            var value = req.body.keywords[k];
            keywordsArray.push(value);
        }
        var competenciesArray = [];
        for(var c in req.body.competencies) {
            var value = req.body.competencies[c];
            competenciesArray.push(value);
        }
        var educationsArray = [];
        for(var e in req.body.educations) {
            var value = req.body.educations[e];
            educationsArray.push(value);
        }
        var languagesArray = [];
        for(var e in req.body.languages) {
            var value = req.body.languages[e];
            languagesArray.push(value);
        }
        var programminglanguagesArray = [];
        for(var p in req.body.programmingLanguages) {
            var value = req.body.programmingLanguages[p];
            programminglanguagesArray.push(value);
        }
        var databasesArray = [];
        for(var d in req.body.databases) {
            var value = req.body.databases[d];
            databasesArray.push(value);
        }
        var techniquesArray = [];
        for(var t in req.body.techniques) {
            var value = req.body.techniques[t];
            techniquesArray.push(value);
        }
        var missionsArray = [];
        for(var m in req.body.missions){
            
        
            var aCompany = req.body.missions[m].company;
            var aStartdate = req.body.missions[m].startdate;
            var aEnddate = req.body.missions[m].enddate;
            var aRole = req.body.missions[m].role;
            var aTechnique = req.body.missions[m].technique;
            var aDescription = req.body.missions[m].description;
            
            var aMission = {
                company: aCompany,
                startdate: aStartdate,
                enddate: aEnddate,
                role: aRole,
                technique: aTechnique,
                description: aDescription};

            missionsArray.push(aMission);
        }

        const newProfile = new Profiles({
            name : req.body.name,
            keywords : keywordsArray,
            description : req.body.description,
            competencies : competenciesArray,
            educations : educationsArray,
            languages : languagesArray,
            programmingLanguages : programminglanguagesArray,
            databases : databasesArray,
            techniques : techniquesArray,
            missions : missionsArray
        });

        newProfile.save((err, doc) => {
            if(err){
                console.log(err);
            };
            return res.status(200).json({
                status : 200,
                data : doc
            })
        });
    });
});


//Update Profile
app.post('/api/profile/updateProfile',(req, res) => {
    mongoose.connect(url,{useNewUrlParser: true} ,function(err){
        if(err) throw err;
        Profiles.updateOne({name : req.body.name}, 
                        {$set : {
                            keywords  : req.body.keywords,
                            description : req.body.description,
                            competencies : req.body.competencies,
                            educations : req.body.educations,
                            languages : req.body.languages,
                            programmingLanguages : req.body.programmingLanguages,
                            databases : req.body.databases,
                            techniques : req.body.techniques } },
                        (err, profile) => {
                        if(err) throw err;
                        return res.status(200).json({
                            status: 'success',
                            data: profile
                        })
                    });
    });
});


//GetLookups 
app.post('/api/profile/getLookups',(req, res) => {
    mongoose.connect(url,{useNewUrlParser: true} ,function(err){
        if(err) throw err;
        Lookups.findOne({},(err, lookups) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: lookups
            })
        });
    });
});


//Add Mission
app.post('/api/profile/addMission', (req, res) => {

    mongoose.connect(url, function(err){
        if(err) throw err;

        var aName = req.body.name;
        var aCompany = req.body.company;
        var aStartdate = req.body.startdate;
        var aEnddate = req.body.enddate;
        var aRole = req.body.role;
        var aTechnique = req.body.technique;
        var aDescription = req.body.description;
        
        var aMission = {
            company: aCompany,
            startdate: aStartdate,
            enddate: aEnddate,
            role: aRole,
            technique: aTechnique,
            description: aDescription};

        Profiles.update(
            {name : aName},
            {$push : {missions : {
                company: req.body.company,
                startdate : req.body.startdate,
                enddate : req.body.enddate,
                role : req.body.role,
                techniques  :req.body.techniques,
                description : req.body.description}}},(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                date : doc
            })
        });
    });
});
 
app.listen(3000, () => console.log('AlbaZero server running on port 3000!'))