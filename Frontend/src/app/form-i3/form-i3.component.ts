import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';//new

@Component({
  selector: 'app-form-i3',
  templateUrl: './form-i3.component.html',
  styleUrls: ['./form-i3.component.css']
})


 
export class FormI3Component  {
  formI3: FormGroup;
  post:any;
  description:string='';
  name:string='';
  stID:string='';

  constructor(private fb: FormBuilder){
    this.formI3 = fb.group({
      'name':[null,Validators.required],
      'stID':[null,Validators.required],
    'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(100)]) ],
    'validate':''  
    });
  }
  ngOnInit() {

  }
  addPost(post){
    this.description=post.description;
    this.name=post.name;
  }
  
}
