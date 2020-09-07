import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailcheckService {

  private url = 'https://api.raisely.com/v3/check-user';

  constructor(private http: HttpClient) { }

  emailVerification(email:string){
    const body = {
      "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      "data": {
        "email": email,
      }
    };
    return this.http.post<any[]>(`${this.url}`, body).pipe(tap(data => console.log("Service log :"+JSON.stringify(data))));
  }
}
