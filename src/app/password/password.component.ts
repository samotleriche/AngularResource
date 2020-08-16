import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  constructor() {}

  length: number;
  useNumbers: boolean;
  useLetters: boolean;
  useSymbols: boolean;

  chars: string;
  password: string;

  ngOnInit(): void {}

  onChangeLength(event) {
    const parsedValue = Number.parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onGenerateClicked() {
    //console.log(this.length);
    this.chars = '';
    this.password = '';
    if (this.useNumbers) this.chars += '0123456789';
    if (this.useLetters) this.chars += 'abcdefghijklmnopqrstuvwxyz';
    if (this.useSymbols) this.chars += '!@#$%^&*()_+';

    for (let x = 0; x < this.length; x++) {
      let randChar = this.chars[Math.floor(Math.random() * this.chars.length)];
      this.password += randChar;
    }

    console.log(this.password);
  }
}
