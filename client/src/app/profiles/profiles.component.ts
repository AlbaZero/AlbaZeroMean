import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Profile } from '../model/profile';
import { GetProfileService} from './get-profiles.service';
import { UpdateProfileService } from './update-profile.service';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css']
  })
export class ProfilesComponent implements OnInit {
  profiles : any[];
  currentProfile : Profile;
  showProfile : boolean;

  constructor(private _getProfileService : GetProfileService, private _updateProfileService : UpdateProfileService){
    this.showProfile = true;
  }

  ngOnInit() {
    //console.log('start...')
   this.getProfiles();
  }

  getProfiles(){
    this._getProfileService.getProfiles().subscribe(( res ) => {
      this.profiles = res['data'];
    })
  }

  setShowProfile(){
    this.showProfile = !this.showProfile;
  }
/*
  updateProfile(){
    this._updateProfileService.updateProfile('Joe Doe','Key4').subscribe(( res ) => {
      this.profiles = res['data'];
      console.log('res' + res['data']);
    })
  }
*/
  onSelect(profile : Profile){
    this.currentProfile = profile;
    //console.log(this.currentProfile.name);
  }
}