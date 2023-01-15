import { Component, Input } from '@angular/core';
import { Color, Size } from './types';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  @Input() size:Size = 'is-medium';
  @Input() color:Color = 'is-link';

}
