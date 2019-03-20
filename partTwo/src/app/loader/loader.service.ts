import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  dialogRef: MatDialogRef<LoaderComponent>;
  constructor( private _dialog: MatDialog ) { }

  show(message: string = "Please wait..."): void {
    this.dialogRef = this._dialog.open(LoaderComponent, {
      width: '80%',
      data: { 'message': message },
      closeOnNavigation: false
    });
  }

  hide() {
    if (this.dialogRef)
      this.dialogRef.close();
  }
}