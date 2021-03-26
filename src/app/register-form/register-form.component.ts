import { Component, OnChanges, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit, OnChanges {
  constructor() { }
  userInfo = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: 15,
    role: "student"
  };
  userNamePattern = /^[a-zA-Z ]*$/;
  emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  isSubmited: boolean = false;

  ngOnInit() { }

  ngOnChanges() {
    console.log(this.userInfo);
  }
  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.isSubmited = true;

    if (form.invalid) {
      return;
    }
    alert("Register Success! (apart from confirm password)");
    form.reset();
    this.isSubmited = false;
  }

}
