import { Component, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { passwordMustEqualValidator } from "src/validator/must-equal.validator";

@Component({
  selector: "register-reactive-form",
  templateUrl: "./register-reactive-form.component.html",
  styleUrls: ["./register-reactive-form.component.css"]
})
export class RegisterReactiveFormComponent implements OnInit, OnChanges {
  userNamePattern = /^[a-zA-Z ]*$/;
  emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  registerForm!: FormGroup;
  isSubmited: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl("",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
            Validators.pattern(this.userNamePattern)
          ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
            Validators.pattern(this.passwordPattern)
          ]
        ),
        confirmPassword: new FormControl("",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
            Validators.pattern(this.passwordPattern)
          ]
        ),
        age: new FormControl(18),
        role: new FormControl("student")
      }, {validators: passwordMustEqualValidator}
    );
  }

  get formControl() {
    return this.registerForm.controls;
  }

  validatePasswordIsEqual() {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls.password;
      const confirmPasswordControl = formGroup.controls.confirmPassword;
      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.mustEqual
      ) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustEqual: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  ngOnChanges() {
    console.log(this.registerForm.value);
  }

  onSubmit(): void {
    this.isSubmited = true;
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      return;
    }
    alert("Register success!");
    this.isSubmited = false;
    this.registerForm.reset();
  }
}
