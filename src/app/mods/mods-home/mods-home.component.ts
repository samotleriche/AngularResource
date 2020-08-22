import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    {
      status: 'success',
      content:
        'This is the content in the message section it should be a lorum ipsum bit is isntsum.',
    },
    {
      status: 'warning',
      content:
        'This is the content in the message section it should be a lorum ipsum bit is isntsum.',
    },
    {
      status: 'info',
      content:
        'This is the content in the message section it should be a lorum ipsum bit is isntsum.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
