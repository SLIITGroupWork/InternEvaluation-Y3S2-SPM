import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
import { Form5 } from '../api.models';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {
  rForm: FormGroup;
  post: any;
  studentID: string = '';
  studentName: string = '';
  employersName: string = '';
  supervisorName: string = '';
  description: string = '';
  titlealert: string = 'The Student ID is required';

  form5Data = new Form5;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService


  ) {
    this.rForm = fb.group({
      'studentID': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength[1]])],
      'studentName': [null, Validators.required],
      'employersName': [null, Validators.required],
      'supervisorName': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description1': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description2': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description3': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description4': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description5': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'description6': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'validate': ''
    });
  }

  ngOnInit() {
    
    //  this.rForm.get('validate').valueChanges.subscribe(
    //    (validate)=>{
    //      if(validate=='1'){
    //        this.rForm.get('studentID').setValidators([Validators.required,Validators.maxLength[10]]);
    //        this.titlealert="You need to enter the 10 characters ";
    //      }else{
    //        this.rForm.get('studentID').setValidators(Validators.required);
    //      }
    //      this.rForm.get('studentID').updateValueAndValidity();
    //    }

    //  )


    this.api.getFormByStudentId("123").subscribe(res => {
      console.log('current student: ', res);
    });
  }

  addPost(post) {
    
    this.form5Data.studentID = post.studentID;
    this.form5Data.studentName = post.studentName;
    this.form5Data.supervisorName = post.supervisorName;
    this.form5Data.employerName = post.supervisorName;
    this.form5Data.description1 = post.description;
    this.form5Data.description2 = post.description1;
    this.form5Data.description3 = post.description2;
    this.form5Data.description4 = post.description3;
    this.form5Data.description5 = post.description4;
    this.form5Data.description6 = post.description5;
    this.form5Data.description7 = post.description6;
    this.form5Data.date = "date";
    this.form5Data.externalSupervisiorName = "test";
    this.form5Data.overallStudentPerformence = "test";
    this.form5Data.type = "test";

    console.log('form data: ', this.form5Data);

    this.api.submitForm5(this.form5Data).subscribe(res => {
        console.log('response: ', res);
        if(res){
          alert('Sucsess!');
        }
    });

  }

}
