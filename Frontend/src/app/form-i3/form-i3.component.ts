import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';//new
import { FormI3 } from '../api.models';
import {ApiService} from '../api.service';

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
  titleAlert:string='This field is required';

  //Supervisor Fields
  eSupEmail:string='';

  formI3Data= new FormI3;
  constructor(private fb: FormBuilder,private api:ApiService){
    
    this.formI3 = fb.group({
      'name':[null,Validators.required],
      'stID':[null,Validators.required],
   // 'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(100)]) ],
      'iAddress':[null,Validators.required],
      'iContactNumber':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
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
    this.formI3Data.studentID=post.sid;
    this.formI3Data.studentName=post.iname;
    this.formI3Data.studentAddress=post.iAddress;
    this.formI3Data.studentContact=post.iContactNumber;
    this.formI3Data.studentEmail=post.iemail;
    this.formI3Data.InternshipTitle=post.iTitle;
    this.formI3Data.Specialization=post.iSpecialisation;
    this.formI3Data.PeriodFrom=post.iPFrom;
    this.formI3Data.PeriodTo=post.iPTo;
    this.formI3Data.SupervisorName=post.eSupName;
    this.formI3Data.Date=post.eSDate;
    this.formI3Data.KeyTaskSummary=post.isummary;
    this.formI3Data.TasksCompleted=post.itasks;
    this.formI3Data.SupervisorRemarks=post.iremarks;

    this.api.submitForm3(this.formI3Data).subscribe(res=>{
      console.log('response',res);
      if(res){
        alert('Successful');
      }
    });
  }

  //adding supervisor details
  addSupervisorEmail(post){
    this.eSupEmail=post.eSupEmail;
  }
  
}
