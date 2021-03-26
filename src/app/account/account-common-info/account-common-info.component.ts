import { Component, Input } from "@angular/core";

@Component({
  selector: "account-common-info",
  templateUrl: "./account-common-info.component.html",
  styleUrls: ["./account-common-info.component.css"]
})
export class AccountCommonInfoComponent {
  userName: string;
  email: string;
  avatarImg: string;
  @Input() branch: string = '';
  constructor() {
    this.userName = "Anh Vu Hoang";
    this.email = "anhvh@nashtechglobal.com";
    this.avatarImg =
      "https://kenh14cdn.com/203336854389633024/2021/1/12/photo-1-1610386252773254377124.jpg";
  }
}

