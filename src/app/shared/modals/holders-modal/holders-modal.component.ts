import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-holders-modal',
  templateUrl: './holders-modal.component.html',
  styleUrls: ['./holders-modal.component.css']
})
export class HoldersModalComponent {
  @Input() data!: any;
  @Output()
  onClose = new EventEmitter();

  cancel() {
    this.onClose.emit(null);
  }
}
