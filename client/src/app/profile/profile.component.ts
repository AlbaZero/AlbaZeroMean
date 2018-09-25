import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProfileService } from './profile.service';
import {Mission} from '../model/mission';
import {Profile} from '../model/profile';
import { Lookups } from '../model/lookups';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentProfile : Profile;
  newMission : Mission;
  dummy = "Joe Doe";
  //temp : any[];
  showProfile : boolean;
  showMissions : boolean;
  //keywords : string[];
  _lookups : Lookups;

  constructor(private profileservice : ProfileService) {
    this.newMission = new Mission()
    this.currentProfile = new Profile();
    this._lookups = new Lookups();
   }

   ngOnInit() {
    this.showProfile = true;
    this.showMissions = false;
    //this.getProfile();
    this.getLookups();
  }

  //----------- Save the new profile ---------------------------------
  createProfile(){
    this.profileservice.createProfile(this.currentProfile).subscribe(
      result => {}),
      err => {}
  }


  //---------- Get Lookups ----------------------------------------------
  getLookups(){
    this.profileservice.getLookups().subscribe(result => {
      if(result['data']){
      this._lookups = result['data'];
      }
    }),
    err => {
      console.log("getTechniques failed" + err);
    }
  }

  addMission(){
    let aMission : Mission;
    aMission = new Mission();
    aMission.company = this.newMission.company;
    aMission.startdate = this.newMission.startdate;
    aMission.enddate = this.newMission.enddate;
    aMission.role = this.newMission.role;
    aMission.techniques = this.newMission.techniques;
    aMission.description = this.newMission.description;
    this.currentProfile.missions.push(aMission);
  }

  //------------- Fill Arrays  --------------------------------------------
  addKeyword(keyword : string){
    this.currentProfile.keywords.push(keyword);
  }

  addCompetence(c : string){
    this.currentProfile.competencies.push(c);
  }

  addEducation(e : string){
    this.currentProfile.educations.push(e);
  }

  addLanguage(l : string){
    this.currentProfile.languages.push(l);
  }

  addProgrammingLanguage(p : string){
    this.currentProfile.programmingLanguages.push(p);
  }

  addDatabase(t : string){
    this.currentProfile.databases.push(t);
  }

  addTechnique(t : string){
    this.currentProfile.techniques.push(t);
  }

  editProfile(){
    this.showMissions = false;
    this.showProfile = true;
  }

  editMissions() {
    this.showMissions = true;
    this.showProfile = false;
  }
}
