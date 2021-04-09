import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if( (control.value as string).indexOf(' ') >= 0 )
            return { cannotContainSpace: true };
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( control.value !== '1234')
                    resolve({ shouldBeUnique: true });
                else
                    resolve( null );
            }, 500)     
        });
    }

    static matchingError(control: AbstractControl): ValidationErrors | null {
        if( control!.get('newPassword')!.value !== control!.get('confirmPassword')!.value)
            return { matchingError: true };
        return null;
    }
}