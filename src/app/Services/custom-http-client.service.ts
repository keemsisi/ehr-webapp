import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PatientModel } from '../Model/patient.model';


@Injectable()
export class CustomHttpClientService {
  staticURL: String  = 'https://3.17.179.140:3000';
  constructor(private http: HttpClient) {
  }

  logout(token: string): Observable<any> {
    return this.http.post(`${this.staticURL}` + '/admin/logout', {token: token} , {responseType: 'json'});
  }

  createPatient(data: {}): Observable<PatientModel[]> {
    return this.http.post<PatientModel[]>(`${this.staticURL}` + '/patients', data, {responseType: 'json'});
  }
  
  getAllPatients(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(`${this.staticURL}/patients`, {responseType: 'json'});
  }
}