import { FormGroup } from '@angular/forms';
export class FormValidator {

    static validateForm(form: FormGroup): Boolean {
        Object.keys(form.controls).map((objectKey) => {
            const formControl = form.controls[objectKey];
            formControl.markAsTouched();
        });
        return form.valid;
    }
}