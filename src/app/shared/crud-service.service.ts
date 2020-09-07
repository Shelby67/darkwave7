import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { IForm } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  //private server = 'http://darkwave6.c1.biz/forms';
  private server = "assets/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*"
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(formValue: IForm): Observable<any> {
    return this.httpClient.post<IForm>(this.server + 'server.json', JSON.stringify(formValue)).pipe(
      tap(data => console.log("Form Details:" + data)),
      catchError(this.errorHandler)
    )

  }  
 
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
