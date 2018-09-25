import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
    providedIn: 'root'
  })
  export class GetProfileService {
    constructor(private http : HttpClient) {}

    getProfiles(){
        return this.http.post('/api/profile/getAll', {});
    }
  }

