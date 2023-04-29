import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LoaderComponent } from './loader/loader.component';
import { BarComponent } from './charts/bar/bar.component';
import { ScatterComponent } from './charts/scatter/scatter.component';



@NgModule({
  declarations: [
    HeroComponent,
    LoaderComponent,
    BarComponent,
    ScatterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    HeroComponent,
    LoaderComponent,
    ScatterComponent
  ]

})
export class SharedModule { }
