import { Component, OnInit, Input, MissingTranslationStrategy} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Profile } from '../model/profile';
import { Mission } from '../model/mission';
import { ShowMissionsService } from './show-missions.service'

@Component({
    selector: 'app-showMissions',
    templateUrl: './show-missions.component.html',
    styleUrls: ['./show-missions.component.css']
  })
export class ShowMissionsComponent implements OnInit{
    @Input() currentProfile : Profile;
    @Input() show : boolean;

    editMode : boolean;
    newMission : Mission;
    buttonText : string;

    constructor(private showMissionsService : ShowMissionsService ){
      this.editMode = false;
      this.newMission = new Mission();
      this.buttonText = "Add";
    }

  ngOnInit() { }

  setEditMode(){
    this.editMode = !this.editMode;
    if(this.editMode){this.buttonText = "Cancel"}
    else {this.buttonText = "Add"}
  }

  addMission(){
    //console.log("addMission start...")
    return this.showMissionsService.addMission(this.currentProfile.name, this.newMission).subscribe( res => {
      this.currentProfile.missions.push(this.newMission);
      this.setEditMode();
    },
    err => {
      console.log("Error");
    }
    );

    
  }
}