import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';


export interface Ichoices {
  queNo: number;
  choice: any;
}

@Injectable({
  providedIn: 'root'
})

export class ResultsService {

  score: number = 0;
  correctanswer: number = 0;
  wronganswer: number = 0;
  b: boolean = true;
  choicesArr: Ichoices[] = [];

  constructor(private Qs: QuizService, private router: Router) { }

// saving the options entered by the user into the choicearr

  saveChoices(quesNo: number, choice: any) {
    console.log('******inside save choice******')
    const a1 = {} as Ichoices;
    if (this.choicesArr.length === 0) {
      a1.queNo = quesNo;
      a1.choice = choice;
      this.choicesArr.push(a1);
      console.log('staring insertion' + this.choicesArr[0].choice);
    } else if (this.choicesArr.length > 0) {
      console.log('inside elseif statemennt when arr length ' + this.choicesArr.length);
      this.choicesArr.forEach(element => {
        this.b = true;
        console.log('value of  already saved question no' + element.queNo);
        console.log('value of new queNo ' + quesNo);
        if (element.queNo === quesNo) {
          console.log('both are equal so we override choice');
          this.b = false;
          element.choice = choice;
        }
      });
      if (this.b) {
        console.log('both are notequal so we insert new object into choicearr');
        a1.queNo = quesNo;
        a1.choice = choice;
        this.choicesArr.push(a1);
      }

    }

    console.log("legth of the array after insertion"+this.choicesArr.length);

  }
    

  // evaluating the user entered choices (choicearr)with correct answers

  Evaluate() {
    console.log('******inside evalute******')
    this.router.navigate(["/results"]);
    for (let i = 0; i < 10; i++) {
      console.log("user choice"+this.choicesArr[i].choice)
      this.Qs.questionslist[i].options.forEach((element: any) => {
        if (element.correct) {
          console.log("correct ans" + element.text);
          if (element.text === this.choicesArr[i].choice) {
            this.correctanswer++;
            console.log("user is correct");
          } else {
            this.wronganswer++;
            console.log("user is wrong")
          }
        }
      })
    }

  }

}
