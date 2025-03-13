import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidation(): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
     const password = control.get('Password');
     const confirmPassword = control.get('ConfirmPassword');
 
     if (!password || !confirmPassword || !password.value|| !confirmPassword.value) {
       return null; // لا توجد بيانات، فلا داعي للتحقق
     }
 
     return password.value === confirmPassword.value ? null : { unmatched: "unmatched password" };
   };
 }