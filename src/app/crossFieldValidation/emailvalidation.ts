import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export function existEmail(emails:string[]):ValidatorFn
{
   
return (control:AbstractControl):ValidationErrors|null=>{
    let email=control.get('Email')?.value;
    let isInclude=emails.includes(email)
    if(isInclude)
    {
        return { exist: { email: "This email already exists" } }
    }
    return null;
    
}
}