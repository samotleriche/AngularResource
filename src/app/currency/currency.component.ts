import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  constructor() {}

  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;
  metric: string = 'cm';

  personObj: any = {};

  ngOnInit(): void {
    this.personObj;
  }

  onNameChange(value: string) {
    this.name = value;
    this.personObj.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
    this.personObj.year = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
    this.personObj.legs = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onMetricChange(value: string) {
    this.metric = value;
  }
}
