import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
import { Form1Supervisor } from '../api.models';


@Component({
  selector: 'app-form1-supervisor',
  templateUrl: './form1-supervisor.component.html',
  styleUrls: ['./form1-supervisor.component.css']
})
export class Form1SupervisorComponent implements OnInit {

  rForm: FormGroup;
  post: any;

  studentID: string = '';
  employerName: string = '';
  employerAddress: string = '';
  supervisorTitle: string = '';
  supervisorName: string = '';
  supervisorPhone: string = '';
  supervisorEmail: string = '';
  noHoursWeek: number = 0;
  studentTaskDescription: string = '';
  studentLearnDescription: string = '';
  externelsupervisor: string = '';


  form1SupervisorData = new Form1Supervisor;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) { 
    this.rForm = fb.group({
      'studentID': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength[1]])],
      'employerName': [null, Validators.required],
      'employersAddress': [null, Validators.required],
      'supervisorName': [null, Validators.required],
      'supervisorTitle': [null, Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(1)])],
      'noHours_Week': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'supervisorPhone':  [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength[1]])],
      'supervisorEmail': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'studentExpectedTask': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'studentExpectedLearn': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(1)])],
      'externalSupervisorName':[null, Validators.required],

      'validate': ''
    });

  }

  ngOnInit() {
    
  }

  addPost(post) {
    
    this.form1SupervisorData.studentID = post.studentID;
    this.form1SupervisorData.employersName = post.employersName;
    this.form1SupervisorData.employersAddress = post.employersAddress;
    this.form1SupervisorData.supervisorName = post.supervisorName;
    this.form1SupervisorData.supervisorTitle = post.supervisorTitle;
    this.form1SupervisorData.internshipStartDate = post.internshipStartDate;
    this.form1SupervisorData.internshipEndDate = post.internshipEndDate;
    this.form1SupervisorData.noHours_Week = post.noHours_Week;
    this.form1SupervisorData.supervisorPhone = post.supervisorPhone;
    this.form1SupervisorData.supervisorEmail = post.supervisorEmail;
    this.form1SupervisorData.studentExpectedTask = post.studentExpectedTask;
    this.form1SupervisorData.studentExpectedLearn = post.studentExpectedLearn;
    this.form1SupervisorData.externalSupervisorName = post.externalSupervisorName;
    this.form1SupervisorData.date = post.date;
  

    console.log('form data: ', this.form1SupervisorData);

    this.api.submmitForm1Supervisor(this.form1SupervisorData).subscribe(res => {
        console.log('response: ', res);
        if(res){
          alert('Sucsess!');
        }
    });

  }

}
