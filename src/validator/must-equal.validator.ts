import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMustEqualValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
   const passwordControl = control.get('password');
   const confirmPasswordControl = control.get('confirmPassword');
   if (passwordControl && confirmPasswordControl) {
      if (
         confirmPasswordControl.errors &&
         !confirmPasswordControl.errors.mustEqual
      ) {
         return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
         confirmPasswordControl.setErrors({ mustEqual: true });
         return { mustEqual: true };
      } else {
         confirmPasswordControl.setErrors(null);
      }
   }
   return null;
};