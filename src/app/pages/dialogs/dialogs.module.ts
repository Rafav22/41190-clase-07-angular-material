import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { MatButtonModule } from '@angular/material/button';
import { UsuariosDialogsComponent } from './mis-dialogs/usuarios-dialogs/usuarios-dialogs.component';
import { ComidasDialogComponent } from './mis-dialogs/comidas-dialog/comidas-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogsComponent,
    UsuariosDialogsComponent,
    ComidasDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    DialogsComponent,
  ]
})
export class DialogsModule { }
