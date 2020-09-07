import { Directive } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailcheckService } from './emailcheck.service';
import { map, tap } from 'rxjs/operators';


@Directive({
    selector: '[uniqueEmail]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})

export class UniqueEmailValidatorDirective implements AsyncValidator {

    constructor(private userService: EmailcheckService) { }
    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.userService.emailVerification(c.value).pipe(
            map(users => {
                console.log(c.value, users, JSON.stringify(users).match(/EXISTS/));
                let status = JSON.stringify(users);
                return status.match(/EXISTS/) ? {'uniqueEmail': true } : null;
            }));
    }
}