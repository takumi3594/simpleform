import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
　text1: string;
  text2: string;
  result　:　string　=　"足し算";

  addAndShow():void {
    let forResult: string ="値を入力して";
    let int1: number;
    let int2: number;

    int1 = Number(this.text1);
    int2 = Number(this.text2);

    if(!Number.isNaN(int1) && !Number.isNaN(int2)) {
      forResult = `${int1}+${int2}=${int1+int2}`;
    }
    this.result = forResult;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
