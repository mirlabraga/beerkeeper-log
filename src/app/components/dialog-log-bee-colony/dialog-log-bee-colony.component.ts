import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-log-bee-colony',
  templateUrl: './dialog-log-bee-colony.component.html',
  styleUrls: ['./dialog-log-bee-colony.component.sass']
})
export class DialogLogBeeColonyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLogBeeColonyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
