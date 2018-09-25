import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from '../model/profile';
import { doesNotThrow } from 'assert';

@Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileService {
    constructor(private http : HttpClient) {}

    updateProfile(joe:string, keyword:string){
        return this.http.post('/api/post/updateProfile', {name:joe, keyword:keyword});
    }
  }