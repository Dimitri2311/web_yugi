import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileList: string[] | undefined;
  selectedProfile: string | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {

    this.profileList = ['Ju1','Ju2','Arnaud','Luc','Val','Dim'];

  }

  selectProfile(profile: string) {

    this.selectedProfile = profile;
    console.log(this.selectedProfile);
  }


}
