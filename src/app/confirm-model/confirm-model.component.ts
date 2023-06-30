import { Component, Inject } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss']
})
export class ConfirmModelComponent {
  constructor(
    public database: Database,
    public dialogRef: MatDialogRef<ConfirmModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  addToWinners() {
    let count = 0;
    set(ref(this.database, 'winners/'+ count), {
      name: this.data.name,
      age: this.data.age,
      score: this.data.score

    });
    this.dialogRef.close();
  }
}
