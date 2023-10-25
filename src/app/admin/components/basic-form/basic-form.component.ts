import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  dateField = new FormControl('');

  // ngOnInit(): void {
  //   this.nameField.valueChanges.subscribe((value) => {
  //     console.log(value);
  //   });
  // }

  //Obtener valores de manera reactiva de cualquier formulario en HTML
  getNameValue() {
    console.log(this.nameField.value);
  }
}
