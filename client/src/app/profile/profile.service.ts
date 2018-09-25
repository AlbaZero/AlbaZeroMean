import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from '../model/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) {

   }

  getLookups(){
    return this.http.post('/api/profile/getLookups', {});
  }

  createProfile(value : Profile) {
    return this.http.post('/api/profile/createProfile',
    {
      name : value.name, 
      keywords : value.keywords,
      description : value.description,
      competencies : value.competencies,
      educations : value.educations,
      languages : value.languages,
      programmingLanguages : value.programmingLanguages,
      databases : value.databases,
      techniques : value.techniques,
      missions : value.missions
    });
  }
}
