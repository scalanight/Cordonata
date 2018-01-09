import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MainRoutingModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
