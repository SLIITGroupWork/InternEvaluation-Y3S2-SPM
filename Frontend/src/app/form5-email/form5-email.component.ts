import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-form5-email',
  templateUrl: './form5-email.component.html',
  styleUrls: ['./form5-email.component.css']
})
export class Form5EmailComponent implements OnInit {
  rForm:FormGroup;
  post:any;
  studentId:string='';
  filePath:string='';
  email:string='';
  constructor(private fb: FormBuilder,private location:Location) {
   this.rForm=fb.group({
    'studentId':[null,Validators.compose([Validators.required,Validators.minLength[1],Validators.maxLength[10]])],
    'filePath':[null,Validators.required],
    'email':[null,Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])]
   });
   
   }
  
  ngOnInit() {
  }
  addPost(post){
    this.studentId=post.studentId;
    this.filePath=post.filePath;
    this.email=post.email;
  

 }
 goBack() {
  this.location.back();
}

}
