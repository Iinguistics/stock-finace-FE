import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LoaderComponent } from './loader/loader.component';
import { BarComponent } from './charts/bar/bar.component';
import { ScatterComponent } from './charts/scatter/scatter.component';
import { LineComponent } from './charts/line/line.component';
import { ModalComponent } from './modal/modal.component';
import { BioModalComponent } from './modals/bio-modal/bio-modal.component';
import { HoldersModalComponent } from './modals/holders-modal/holders-modal.component';
import { OutlookModalComponent } from './modals/outlook-modal/outlook-modal.component';



@NgModule({
  declarations: [
    HeroComponent,
    LoaderComponent,
    BarComponent,
    ScatterComponent,
    LineComponent,
    ModalComponent,
    BioModalComponent,
    HoldersModalComponent,
    OutlookModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    HeroComponent,
    HoldersModalComponent,
    LineComponent,
    LoaderComponent,
    OutlookModalComponent,
    BioModalComponent,
    ScatterComponent
  ]

})
export class SharedModule { }
