import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileData().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileData().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
