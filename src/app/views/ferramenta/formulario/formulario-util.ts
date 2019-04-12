import { FormGroup, FormControl, Validators } from '@angular/forms';

export class FormularioUtil {
    static getForm(): FormGroup {
        return new FormGroup({
            id: new FormControl(),
            title: new FormControl(null, [Validators.required]),
            link: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
            tags: new FormControl([]),
        })
    }
}