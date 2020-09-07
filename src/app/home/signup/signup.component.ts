import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailcheckService } from 'src/app/shared/emailcheck.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  tempVar = '';
  constructor(public http: HttpClient, private userService: EmailcheckService) { }
  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z]+$/)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    bio: new FormControl(''),
    email: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-z]{2,5}(\.[a-z]{2,5})?$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9A-Z._%+-\s]{8,32}$")])
  });

  get firstName() {
    return this.loginForm.get('firstName');
  }
  get lastName() {
    return this.loginForm.get('lastName');
  }
  get bio() {
    return this.loginForm.get('bio');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {
  }
  sendData(data) {
    console.log(data);
    const headers = { 'Authorization': 'Bearer my-token' };
    const body = {
      "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      "data": {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "password": data.password
      }
    };
    const body2 = {
      "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      "data": {
        "email": "test@test.com"
      }
    }
    this.http.post<any>('https://api.raisely.com/v3/check-user/', body2).subscribe({
      next: data => { this.tempVar = data; console.log(this.tempVar) },
      error: error => console.error('There was an error!', error)
    })

  }
}
