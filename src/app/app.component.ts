import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final Excercise';
  isShowProfile: boolean=true;
  
  toggleProfile(isShowProfile: boolean):void{
    console.log(isShowProfile);
    this.isShowProfile = isShowProfile;
  }
}
