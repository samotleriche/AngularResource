import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Reviews' },
    { value: 50.5, label: 'Hours' },
    { value: 12333, label: 'Days of Light' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a great couch to sit on.',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
