import { Injectable, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {

  public questionslist: any=[];
  public currentQuestion: number=0;

  constructor(private questionService:QuestionsService) 
  { 

  }

  ngOnInit(): void {
    
  }

  getAllQuestions(){
    this.questionslist= this.questionService.Questions;
    }


  }





 

