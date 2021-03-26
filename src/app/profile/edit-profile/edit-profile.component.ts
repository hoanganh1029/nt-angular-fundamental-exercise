import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from 'src/models/profile';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profile!: Profile;
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private profileService: ProfileService) { }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      birthday: [null, [Validators.required]],
      phoneNumberPrefix: ['+94'],
      phone: [''],
      email: ['', [Validators.email]],
      address: [''],
    });
    this.getProfile();
  }

  submitForm(): void {
    for (const i in this.profileForm.controls) {
      this.profileForm.controls[i].markAsDirty();
      this.profileForm.controls[i].updateValueAndValidity();
    }
    if (this.profileForm.invalid) {
      return;
    }
    const profile = Object.assign(this.profile, this.profileForm.value as Profile);
    this.profileService.update(profile).subscribe(r => {
      console.log(r);
      this.goBack()
    });
  }

  goBack(): void {
    this.location.back();
  }

  getProfile(): void {
    const profileId = this.activatedRoute.snapshot?.paramMap.get('id') as string;
    this.profileService.getProfileById(profileId).subscribe(profile => {
      this.profile = profile;
      this.profileForm.patchValue({
        name: profile.name,
        avatar: profile.avatar,
        birthday: profile.birthday,
        phone: profile.phone,
        email: profile.email,
        address: profile.address,
      })
    });
  }

}
