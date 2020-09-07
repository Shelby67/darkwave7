import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    bio: new FormControl(''),
    email: new FormControl('', [Validators.pattern("^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-z]{2,5})(.[a-z]{2,5})?$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9A-Z._%+-]{8,32}$")])
  });
  get firstName(){
    return this.loginForm.get('firstName');
  }
  get lastName(){
    return this.loginForm.get('lastName');
  }
  get bio(){
    return this.loginForm.get('bio');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  ngOnInit(): void {

  }

}
