import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  // q_obj: any = [];
  new_question: string;

  q_obj: any = [
    {questionID: 1, question: "Do you take any blood thinning medication?"},
    {questionID: 2, question: "Do you have diabetes, which requires medication?"},
    {questionID: 3, question: "Do you have high blood pressure OR take medication for high blood pressure?"},
    {questionID: 4, question: "Do you suffer from angina or chest pain?"},							
    {questionID: 5, question: "Do you have a pacemaker?"}]						
  
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    
    // this.new_question = '';
    // this.apiService.getQuestionApi()
    // .subscribe(
    //   data => this.q_obj = data,
    //   err => console.log(err));    
  }

  // addQuestion(): void {    
  //   this.apiService.addQuestionDbApi({
  //     questionID: null,
  //     parent: 0,
  //     question: this.new_question
  //   })
  //   .subscribe(
  //    data => {this.q_obj.push(data)},
  //    error =>{console.log('error during post is ', error)
  //   }
  //   );

  // }

  // delete(question: any): void {
  //   this.apiService.deleteQuestionApi(question.questionID)
  //   .subscribe(
  //     data => this.q_obj.splice(this.q_obj.indexOf(question) , 1),
  //     err => console.log(err))    
  // }

  // edit(): void {
  //   console.log("dsafasdfasdf");
  // }


  addQuestion(): void {    
    this.q_obj.push({
      questionID: null,
      parent: 0,
      question: this.new_question
    })


  }

  delete(question: object): void {
    this.q_obj.splice(this.q_obj.indexOf(question) , 1)  

  }




}
