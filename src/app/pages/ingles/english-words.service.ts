import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnglishWordsService {

  public words:string[];

  constructor(){
    this.words=[
      "car",
      "bird",
      "kiss",
      "bench",
      "wish",
      "box",
      "quiz",
      "baby",
      "fish",
      "sheep",
      "salmon",
      "foot",
      "man",
      "tooth",
      "woman",
      "analysis",
      "crisis",
      "potato",
      "tomato",
      "zero"]}
}
