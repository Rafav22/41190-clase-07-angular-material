import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData{
  usuario:{
    nombre:string;
    apellido:string;
  }
}

@Component({
  selector: 'app-usuarios-dialogs',
  templateUrl: './usuarios-dialogs.component.html',
  styleUrls: ['./usuarios-dialogs.component.scss']
})
export class UsuariosDialogsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
}
