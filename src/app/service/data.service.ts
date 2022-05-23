import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../model/doctor.model';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllDoctorNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/doctorNames`);
  }

  public getDoctorByName(name: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiServerUrl}/doctor/${name}`);
  }

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiServerUrl}/patient/${id}`);
  }

  public addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/doctor`, doctor);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiServerUrl}/patient`, patient);
  }
}
