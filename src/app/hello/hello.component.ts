import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup; 

  constructor() { }

  ngOnInit()  {
    this.title = 'Hello-app';
    this.message = 'ngModel使用';
    this. myControl = new FormGroup({
      control: new FormControl()
    });
  }

  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }

}
