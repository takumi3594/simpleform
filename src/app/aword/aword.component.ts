import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aword',
  templateUrl: './aword.component.html',
  styleUrls: ['./aword.component.scss']
})
export class AwordComponent implements OnInit {
  awords: object[];
  awordTitle: string;


  constructor() { }

  ngOnInit() {
    this.awordTitle = '';
    this.awords = [
    ];

  }

  addAword(): void {
    if (this.awordTitle.trim().length ==0 ) {
      return;
    }

    this.awords.push({
      id: 1,
      title: this.awordTitle,
      completed: false,
      editing: false,
    });
    this.awordTitle = '';
  }

}
