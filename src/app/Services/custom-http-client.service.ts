import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PatientModel } from '../Model/patient.model';


@Injectable()
export class CustomHttpClientService {
  staticURL: String  = 'https://locahosthost:3000/';
  constructor(private http: HttpClient) {
  }

  logout(token: string): Observable<any> {
    return this.http.post(`${this.staticURL}` + '/admin/logout', {token: token} , {responseType: 'json'});
  }

  createPatient(data: string): Observable<PatientModel[]> {
    return this.http.post<PatientModel[]>(`${this.staticURL}` + '/applicants/byusername/', data, {responseType: 'json'});
  }
  
  getAllPatients(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(`${this.staticURL}`, {responseType: 'json'});
  }

  authAdmin(cred : {}): Observable<any> {
    return this.http.post(`${this.staticURL}` + '/applicants/byspNumber/', cred, {responseType: 'json'});
  }
}