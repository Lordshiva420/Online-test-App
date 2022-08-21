import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { ResultsService } from '../service/results.service';





@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})



export class QuizComponent implements OnInit {

  public Qlist: any = [];
  public currentQue: number = 0;
  public onsumbit: boolean = false;

  constructor(private quizservice: QuizService, private Rs: ResultsService) { }

  ngOnInit(): void {

    this.quizservice.getAllQuestions();
    this.Qlist = this.quizservice.questionslist;
    this.currentQue = this.quizservice.currentQuestion;
    console.log(this.Qlist[this.currentQue].questionText);
  }

  getChoices(quesNo: number, choice: any, index?: number) {

    this.Rs.saveChoices(quesNo, choice);

  }

  submit() {
    this.onsumbit = true;
    this.Rs.Evaluate();
    
  }

  preQuestion() {
    this.currentQue--;
  }
  nextQuestion() {
    this.currentQue++;
  }


}
