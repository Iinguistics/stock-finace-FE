import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LoaderComponent } from './loader/loader.component';
import { BarComponent } from './charts/bar/bar.component';
import { ScatterComponent } from './charts/scatter/scatter.component';
import { LineComponent } from './charts/line/line.component';



@NgModule({
  declarations: [
    HeroComponent,
    LoaderComponent,
    BarComponent,
    ScatterComponent,
    LineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    HeroComponent,
    LineComponent,
    LoaderComponent,
    ScatterComponent
  ]

})
export class SharedModule { }
