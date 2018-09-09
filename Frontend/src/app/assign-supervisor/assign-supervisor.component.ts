import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-assign-supervisor',
  templateUrl: './assign-supervisor.component.html',
  styleUrls: ['./assign-supervisor.component.css']
})
export class AssignSupervisorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate4() {
    this.router.navigate([""]);
}

}
