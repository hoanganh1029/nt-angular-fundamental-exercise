import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/models/profile';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileId: string = "c003";
  profile!: Profile;
  @Output() onCloseProfile = new EventEmitter();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfileById(this.profileId).subscribe(p => {
      this.profile = p;
      console.log(p);
    });
  }

  closeProfile() {
    this.onCloseProfile.emit(false);
  }
}
