import { Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Profile } from '../model/profile';
import { ShowProfileService } from './show-profile.service';
import { Lookups } from '../model/lookups';

@Component({
    selector: 'app-showProfiles',
    templateUrl: './show-profile.component.html',
    styleUrls: ['./show-profile.component.css']
  })
export class ShowProfilesComponent implements OnInit{
    @Input() currentProfile : Profile;
    @Input() show : boolean;
    
    editMode : boolean;
    buttonText : string;
    _lookups : Lookups;

    tmpkeywords : string[];
    tmpdescription : string;
    tmpcompetencies : string[];
    tmpeducations : string[];
    tmplanguages : string[];
    tmpprogrammingLanguages : string[];
    tmpdatabases : string[];
    tmptechniques : string[];
    
    constructor(private showprofileService : ShowProfileService){
     
      this._lookups = new Lookups();
      this.tmpkeywords = new Array<string>();
      this.tmpcompetencies = new Array<string>();
      this.tmpeducations = new Array<string>();
      this.tmplanguages = new Array<string>();
      this.tmpprogrammingLanguages = new Array<string>();
      this.tmpdatabases = new Array<string>();
      this.tmptechniques = new Array<string>();
    }

  ngOnInit() {
    this.editMode = false;
    this.buttonText = "edit";

    this.getLookups();   
   }

   ngDoCheck() {
    //console.log("ngDoCheck.......")
    //if(this.currentProfile){
     //this.fillArrays();
    
   }

   fillArrays(){
    //this.tmpkeywords = this.currentProfile.keywords;
   }

   clearArrays(){
    this.tmpkeywords = [];
    this.tmpcompetencies = [];
    this.tmpeducations = [];
    this.tmplanguages = [];
    this.tmpprogrammingLanguages = [];
    this.tmpdatabases = [];
    this.tmptechniques = [];
   }
  //------------- Update CurrentProfile--------------------------------------------
   updateCurrentProfile(){
    this.tmpkeywords.forEach(x => {
      this.currentProfile.keywords.push(x);
    })

    this.tmpcompetencies.forEach(x => {
      this.currentProfile.competencies.push(x);
    })

    this.tmpeducations.forEach(x => {
      this.currentProfile.educations.push(x);
    })

    this.tmplanguages.forEach(x => {
      this.currentProfile.languages.push(x);
    })

    this.tmpprogrammingLanguages.forEach(x => {
      this.currentProfile.programmingLanguages.push(x);
    })

    this.tmpdatabases.forEach(x => {
      this.currentProfile.databases.push(x);
    })

    this.tmptechniques.forEach(x => {
      this.currentProfile.techniques.push(x);
    })

    this.clearArrays();
  
   }


  setEditMode(){
    if(this.editMode){
      this.clearArrays();
      this.buttonText = "edit";
      this.currentProfile.description = this.tmpdescription;
    }
    else {
      this.fillArrays();
      this.buttonText = "Cancel";
      this.tmpdescription = this.currentProfile.description;
    }
    this.editMode = !this.editMode;
  }

  //---------- Get Lookups ----------------------------------------------
  getLookups(){
    this.showprofileService.getLookups().subscribe(result => {
      if(result['data']){
        this._lookups = result['data'];
      }
    })
  }

  //------------- Fill Arrays  --------------------------------------------
  addKeyword(keyword : string){
    this.tmpkeywords.push(keyword);
  }

  addCompetencies(competence : string){
    this.tmpcompetencies.push(competence);
  }

  addEducations(education : string){
    this.tmpeducations.push(education);
  }

  addLanguages(language : string){
    this.tmplanguages.push(language);
  }

  addProgrammingLanguage(programminglanguage : string){
    this.tmpprogrammingLanguages.push(programminglanguage);
  }

  addDatabase(database : string) {
    this.tmpdatabases.push(database)
  }

  addTechnique(technique : string){
    this.tmptechniques.push(technique);
  }

 
    //------------- Update profile  --------------------------------------------
  updateProfile(){
    //console.log(this.currentProfile.description);
    if(this.editMode){
      this.updateCurrentProfile();
    return this.showprofileService.updateProfile(this.currentProfile).subscribe(res => {
      this.setEditMode();
    })
  }
  }
}