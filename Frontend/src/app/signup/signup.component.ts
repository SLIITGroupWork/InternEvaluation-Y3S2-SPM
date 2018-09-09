
import { Router } from '../../../node_modules/@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate1() {
    this.router.navigate([""]);
}

}
