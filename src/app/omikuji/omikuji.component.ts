import { Component, OnInit } from '@angular/core';
import { sample } from "lodash";
import { Omikuji } from "../interface/omikuji";


@Component({
  selector: 'app-omikuji',
  templateUrl: './omikuji.component.html',
  styleUrls: ['./omikuji.component.scss']
})
export class OmikujiComponent implements OnInit {
  //おみくじ機能
  message: string;
  coment: string;
  omikuji: string;
  ominum: number;

  //日記機能
  　//リスト化
  diarys: Omikuji[];
  　//日記内容
  diaryTitle: string;
  idForDiary: number;

  public now = new Date();

  
  constructor() { 
    //初期設定
    this.omikuji = "？";
    this.idForDiary = 2;
  }

  ngOnInit() {
    //試し書き
    this.diaryTitle = '';
    this.diarys = [
      {
        'id': 1,
        'title': 'Happy is Daikichi today',
        'completed': false,
        'editing': false,
        'result' : '大吉',
      },
    ];
  }

  addDiary(): void {

    //diaryTitle
    //(trimはdiaryTitle内の両端の空白削除)
    if (this.diaryTitle.trim().length ==0 ) {
      return;
    }

    //push機能
    this.diarys.push({
      id: this.idForDiary,
      title: this.diaryTitle,
      completed: false,
      editing: false,
      result: this.omikuji,
    });
    this.diaryTitle = '';
    this.idForDiary++;
    // console.log(this.idForDiary);
    // this.diarys.forEach(element => {
    //   console.log(element.id);
    // });
 }

 //削除機能
 deleteDiary(id: number):void {
   //filter(diary)でdiaryの適応外を削除
   this.diarys = this.diarys.filter(diary => diary.id !== id);
 }

 //おみくじ内容
  draw() {
    this.ominum =  Math.floor( Math.random() * 4 ) ;
    if(this.ominum === 1) {
      this.omikuji = "大吉",
      this.coment = "一番良い運勢です"
    } else if(this.ominum === 2 ) {
      this.omikuji = "中吉",
      this.coment = "そこそこ良い運勢です"
    } else if(this.ominum === 3 ) {
      this.omikuji = "小吉",
      this.coment = "普通です"
    } else {
      this.omikuji = "凶",
      this.coment = "駄目駄目な運勢です"
    }
  }
}


