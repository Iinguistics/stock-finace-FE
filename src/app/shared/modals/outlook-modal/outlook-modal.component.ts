import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-outlook-modal',
  templateUrl: './outlook-modal.component.html',
  styleUrls: ['./outlook-modal.component.css']
})
export class OutlookModalComponent {
  @Input() data!: any;
  @Output()
  onClose = new EventEmitter();

  cancel() {
    this.onClose.emit(null);
  }

}
