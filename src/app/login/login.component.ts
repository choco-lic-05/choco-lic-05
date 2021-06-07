import { Component, OnInit } from '@angular/core';
import { slideleft, slideright } from '../animation';
import { userDetails } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[slideleft,slideright]
})
export class LoginComponent implements OnInit {

  showPassword:boolean=true;

  userDetails= new userDetails('','');

  constructor() { }

  ngOnInit(): void {
  }

}
