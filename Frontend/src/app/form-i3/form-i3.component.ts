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
//Student Fields
  description:string='';
  name:string='';
  stID:string='';

  //Supervisor Fields
  eSupEmail:string='';

  constructor(private fb: FormBuilder){
    this.formI3 = fb.group({
      'name':[null,Validators.required],
      'stID':[null,Validators.required],
   // 'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(100)]) ],
      'iAddress':[null,Validators.required],
      'iContactNumber':[null,Validators.required],
      'iEmail':[null,Validators.required],

      //Supervisor Details validatons declations
      'eSupEmail':[null,Validators.required],
   'validate':''  
    });
  }
  ngOnInit() {

  }
  //adding student details
  addStudentPost(post){
    this.description=post.description;
    this.name=post.name;
  }

  //adding supervisor details
  addSupervisorEmail(post){
    this.eSupEmail=post.eSupEmail;
  }
  
}
