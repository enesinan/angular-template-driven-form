import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }
  submitted = false;

  clearForm() {
    this.signupForm.setValue({
      userData: {
        username: '',
        email: ''
      },
      secret: '',
      questionAnswer: '',
      gender: ''
    });
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
   this.signupForm.form.patchValue({
    userData: {
      username: suggestedName
    }
   })
  }
/*
  onSubmit(f: NgForm){
    console.log("submitted",f.value)
  }*/
  onSubmit(){
    console.log(this.signupForm)
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
