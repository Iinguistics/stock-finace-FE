import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bio-modal',
  templateUrl: './bio-modal.component.html',
  styleUrls: ['./bio-modal.component.css'],
})
export class BioModalComponent {
  @Input() data!: any;
  @Output()
  onClose = new EventEmitter();

  cancel() {
    this.onClose.emit(null);
  }
}
