import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatCardModule} from '@angular/material/card'
import { MatNativeDateModule } from '@angular/material/core'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatSidenavModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
