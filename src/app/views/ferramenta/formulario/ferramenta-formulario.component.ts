import { FerramentaService } from './../ferramenta.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolModel } from 'src/app/models/tool';
import { FormularioCrud } from './../../../shared/formulario/form-crud';
import { FormValidator } from './../../../shared/validators/form-validator';
import { FormularioUtil } from './formulario-util';

@Component({
  selector: 'app-ferramenta-formulario',
  templateUrl: './ferramenta-formulario.component.html',
  styleUrls: ['./ferramenta-formulario.component.scss']
})
export class FerramentaFormularioComponent extends FormularioCrud implements OnInit {

  form: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ToolModel>,
    private service: FerramentaService) {
      super();
      this.form = FormularioUtil.getForm();
  }

  ngOnInit() {}

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.form.get('tags').value.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  save() {
    if (FormValidator.validateForm(this.form)) {
      this.service.save(this.form.getRawValue()).subscribe(response => {
        this.dialogRef.close();
      })
    }
  }

  removeTag(tag: string): void {
    const index = this.form.get('tags').value.indexOf(tag);

    if (index >= 0) {
      this.form.get('tags').value.splice(index, 1);
    }
  }

}
