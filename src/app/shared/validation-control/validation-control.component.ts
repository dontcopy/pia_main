import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ValidationService } from "../../service/validation-service";

@Component({
  selector: 'validation-control',
  templateUrl: './validation-control.component.html',
  styleUrls: ['./validation-control.component.css']
})
export class ValidationControlComponent  {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}
