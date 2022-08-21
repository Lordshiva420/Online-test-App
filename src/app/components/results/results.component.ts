import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../service/quiz.service';
import { Ichoices, ResultsService } from '../service/results.service';




@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  score: number=this.Rs.score;
  correctanswer:number=this.Rs.correctanswer;
  wronganswer:number=this.Rs.wronganswer;
  NotAttempted:number=0;
  public Qlist:any=[];
  public currentQue: number=0;
  choicesArr: Ichoices[] = [];

  constructor(private Rs:ResultsService,private quizservice:QuizService) { }

  ngOnInit(): void {

   this.quizservice.getAllQuestions();
   this.Qlist=this.quizservice.questionslist;
   this.currentQue=this.quizservice.currentQuestion;
   this.choicesArr=this.Rs.choicesArr;
   this.NotAttempted=this.Qlist.length-(this.correctanswer+this.wronganswer)

  }


    

  }


  
    
  


  
   


