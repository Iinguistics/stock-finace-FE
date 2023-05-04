import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() data!: string;
  @Output()
  onClose = new EventEmitter();

  cancel() {
    this.onClose.emit(null);
  }
}
