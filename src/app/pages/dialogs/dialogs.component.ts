import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogsComponent } from './mis-dialogs/usuarios-dialogs/usuarios-dialogs.component';
import { ComidasDialogComponent } from './mis-dialogs/comidas-dialog/comidas-dialog.component';


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(
    private dialogService: MatDialog
  ){}



  abrirDialogoDeUsuarios() : void {
    const dialogo = this.dialogService.open(UsuariosDialogsComponent, {
      data:{
        usuario:{
          nombre:'Rafael',
          apellido:'Vargas'
        }
      }
    });

    dialogo.afterClosed()
    .subscribe((valor) => console.log(valor));
  }

  abrirDialogoDeComidas(): void {
    this.dialogService.open(ComidasDialogComponent);
  }

}
