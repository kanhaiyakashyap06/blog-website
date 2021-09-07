import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  BaseUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
  public getRequest(data: any): Observable<any> {
    return this.http.get(this.BaseUrl + "posts", data);
  }
  public postRequest(data: any): Observable<any> {
    return this.http.post(this.BaseUrl + "posts", data);
  }
}
