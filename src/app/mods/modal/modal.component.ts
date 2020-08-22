import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) {}

  @Output() closeEvent = new EventEmitter();

  ngOnInit() {}

  toggleModal() {}

  onClose() {
    this.closeEvent.emit();
  }

  getTime() {
    return Date.now();
  }
}
