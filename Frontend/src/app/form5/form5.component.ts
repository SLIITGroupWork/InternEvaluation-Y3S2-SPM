import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {
  rForm:FormGroup;
  post:any;
  studentID:string='';
  studentName:string='';
  employersName:string='';
  supervisorName:string='';
  description:string='';
  titlealert:string='The Student ID is required';


  constructor(private fb :FormBuilder,private router:Router) {
    this.rForm=fb.group({
      'studentID':[null,Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength[1]])],
      'studentName':[null,Validators.required],
      'employersName':[null,Validators.required],
      'supervisorName':[null,Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description1':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description2':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description3':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description4':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description5':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'description6':[null,Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(1)])],
      'validate':''
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
  }
  navigate() {
    this.router.navigate(["form5"]);
}
  addPost(post){
    this.studentID=post.studentID;
    this.studentName=post.studentName;
    this.employersName=post.employersName;
    this.supervisorName=post.supervisorName;
    this.description=post.description;

 }

}
