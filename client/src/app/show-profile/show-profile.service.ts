import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
    providedIn: 'root'
  })
  export class ShowProfileService {

    constructor(private http : HttpClient) {

    }

    getLookups(){
      return this.http.post('/api/profile/getLookups', {});
    }

    updateProfile(profile : Profile){
        //console.log("Service start");
        //console.log(profile.programmingLanguages);
        return this.http.post('/api/profile/updateProfile',{
          name : profile.name,
          keywords : profile.keywords,
          description : profile.description,
          competencies : profile.competencies,
          educations : profile.educations,
          languages : profile.languages,
          programminglanguages : profile.programmingLanguages,
          databases : profile.databases,
          techniques : profile.techniques
        });
      }
  }