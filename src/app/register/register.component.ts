import { Component, OnInit } from '@angular/core';
import { slideleft, slideright } from '../animation';
import { registerclass } from '../Models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[slideleft,slideright]
})
export class RegisterComponent implements OnInit {

  registerDetails=new registerclass('','','','')

  showPassword:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  addRegisterDetails(){
    
  }

}
