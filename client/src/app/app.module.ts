import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfilesComponent} from './profiles/profiles.component'
import { ShowProfilesComponent } from './show-profile/show-profile.component';
import { ShowMissionsComponent } from './show-missions/show-missions.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilesComponent,
    ShowProfilesComponent,
    ShowMissionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
