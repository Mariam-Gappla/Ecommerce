import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export function existEmail():ValidatorFn
{
   let emails:string[]=[
    "mariamgappla@gmail.com",
    "mohra@gmail.com"
   ]
return (control:AbstractControl):ValidationErrors|null=>{
    let email=control.get('Email')?.value;
    let isInclude=emails.find((item)=>item==email)
    if(isInclude)
    {
        return { exist: { email: "This email already exists" } }
    }
    return null;
    
}
}