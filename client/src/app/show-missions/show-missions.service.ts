import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
    providedIn: 'root'
  })
  export class ShowMissionsService {

    constructor(private http : HttpClient) {

    }

    addMission(id : string, mission : Mission){
        //console.log("addMission Service start");
        //console.log(mission);
        return this.http.post('/api/profile/addMission',{
          name : id,
          company : mission.company,
          startdate : mission.startdate,
          enddate : mission.enddate,
          role : mission.role,
          techniques : mission.techniques,
          description : mission.description
        });
      }
  }