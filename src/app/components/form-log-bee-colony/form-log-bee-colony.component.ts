import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ILog } from './../../models/log.model';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-log-bee-colony',
  templateUrl: './form-log-bee-colony.component.html',
  styleUrls: ['./form-log-bee-colony.component.sass']
})
export class FormLogBeeColonyComponent implements OnInit {

  public logFormGroup: FormGroup;
  private dialogConfig;

  constructor(private apollo: Apollo, private location: Location,  private dialog: MatDialog) { }

  ngOnInit() {
    this.logFormGroup = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      hives: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      amountOfHoney: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      dateCollection: new FormControl(new Date()),
      dateNextCollection: new FormControl(new Date())
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.logFormGroup.controls[controlName].hasError(errorName);
  }

  public onCreate = () => {
    if (this.logFormGroup.valid) {
      this.executeLogCreation();
    }
  }

  public executeLogCreation = () => {
    let log: ILog = {
      amount: this.logFormGroup.get('amount').value,
      hives: this.logFormGroup.get('hives').value,
      amountOfHoney: this.logFormGroup.get('amountOfHoney').value,
      dateCollection: this.logFormGroup.get('dateCollection').value,
      dateNextCollection: this.logFormGroup.get('dateNextCollection').value
    }
    this.createLog(log);
  }

  public createLog = (logToCreate: ILog) => {
    this.apollo.mutate({
      mutation: gql`mutation insert_log($objects: [log_colony_insert_input!]!) {
        insert_log_colony(objects: $objects) {
          returning {
            id
          }
        }
      }`,
      variables: {objects: logToCreate}
    }).subscribe(result => {
      console.log(result.data);
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      dialogRef.afterClosed()
        .subscribe(result => {
          this.location.back();
        });
      })
  }

  public onCancel = () => {
    this.location.back();
  }

}
