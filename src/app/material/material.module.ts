import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
