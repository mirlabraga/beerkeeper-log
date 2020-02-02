import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Location} from '@angular/common';


@Component({
  selector: 'app-form-log-bee-colony',
  templateUrl: './form-log-bee-colony.component.html',
  styleUrls: ['./form-log-bee-colony.component.sass']
})
export class FormLogBeeColonyComponent implements OnInit {

  public logFormGroup: FormGroup;

  constructor(private location: Location) { }

  ngOnInit() {
    this.logFormGroup = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      hives: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      amountOfHoney: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      dateCollection: new FormControl(new Date()),
      dateNextCollection: new FormControl(new Date())
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.logFormGroup.controls[controlName].hasError(errorName);
  }

  public createOwner = (logFormValue) => {
    if (this.logFormGroup.valid) {
    }
  }

  public onCancel = () => {
    this.location.back();
  }

}
