import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Location } from "@angular/common";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form1-supervisor-email',
  templateUrl: './form1-supervisor-email.component.html',
  styleUrls: ['./form1-supervisor-email.component.css']
})
export class Form1SupervisorEmailComponent implements OnInit {

  rForm:FormGroup;
  post:any;
  studentId:string='';
  filePath:string='';
  email:string='';

  constructor( 
    private fb: FormBuilder,
    private location:Location,
    private api: ApiService) {
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
    // this.studentId=post.studentId;
    // this.filePath=post.filePath;
    // this.email=post.email;
    
    const dataObject  = {
      studentID : post.studentId,
      senderEmail: post.email
    };

    console.log(dataObject);

    this.api.sendMailForm1Supervisor(dataObject).subscribe(res => {
        console.log('mail sent ', res);
    });



  }
  goBack() {
      this.location.back();
  }

}
