import { Component, OnInit } from '@angular/core';
import { LoremService } from '../lorem.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent implements OnInit {
  constructor(private loremService: LoremService) {}

  successBool: boolean = false;
  enteredText: string = '';

  randomText: string = 'default text is here';

  getLorem() {
    this.randomText = this.loremService.getRandomSentence();
    this.enteredText = '';
  }

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(char, enteredChar) {
    if (!enteredChar) return 'pending';
    return enteredChar === char
      ? 'successGreen'
      : char === ' '
      ? 'failUnderline'
      : 'failRed';
  }

  ngOnInit(): void {
    this.getLorem();
  }
}
