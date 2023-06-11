import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileList: string[] | undefined;

  ngOnInit(): void {

    this.profileList = ['Ju1','Ju2','Arnaud','Luc','Val','Dim'];

  }


  selectProfile(profileId: string) {
    // Ajoutez votre logique de sélection de profil ici
    console.log("Profil sélectionné :", profileId);
  }

}
