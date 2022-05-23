import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { Doctor } from '../model/doctor.model';
import { Gender } from '../model/Gender.enum';
import { Patient } from '../model/patient.model';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let http: HttpClientTestingModule;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    http = TestBed.inject(HttpClientTestingModule);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpController.verify();
  })
  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('Get all Doctor Names Api', () => {
    const testData = ["Arun Kumar", "Khaled"];
    service.getAllDoctorNames().subscribe({
      next: (doctorNames: string[]) => {
        expect(doctorNames).toEqual(testData)
      }
    })
    const req = httpController.expectOne(environment.apiBaseUrl + '/doctorNames');
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  })

  it('Get Doctor By Name Api', () => {
    const testData: Doctor = {
      id: 1,
      name: "Arun Kumar",
      age: 30,
      gender: Gender.Male,
      specialist: "ENT",
      numberOfPatientsVisited: 0
    };

    service.getDoctorByName("Arun Kumar").subscribe({
      next: (doctor: Doctor) => {
        expect(doctor).toEqual(testData)
      }
    })
    const req = httpController.expectOne(environment.apiBaseUrl + '/doctor/' + "Arun Kumar");
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  })

  it('Get Patient By Id Api', () => {
    const testData: Patient = {
      id: 1,
      name: "Raj Kumar",
      age: 30,
      visitedDoctor: 'Arun Kumar',
      dateOfVisit: new Date('2022-05-12'),
      prescription: 'Drink water Daily'
    };

    service.getPatientById(1).subscribe({
      next: (patient: Patient) => {
        expect(patient).toEqual(testData)
      }
    })
    const req = httpController.expectOne(environment.apiBaseUrl + '/patient/1');
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  })


  it('Add Doctor Api', () => {
    const testData: Doctor = {
      id: 1,
      name: "Arun Kumar",
      age: 30,
      gender: Gender.Male,
      specialist: "ENT",
      numberOfPatientsVisited: 0
    };


    service.addDoctor(testData).subscribe({
      next: (doctor: Doctor) => {
        expect(doctor).toEqual(testData)
      }
    })
    const req = httpController.expectOne(environment.apiBaseUrl + '/doctor');
    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  })


  it('Add Patient Api', () => {
    const testData: Patient = {
      id: 1,
      name: "Raj Kumar",
      age: 30,
      visitedDoctor: 'Arun Kumar',
      dateOfVisit: new Date('2022-05-12'),
      prescription: 'Drink water Daily'
    };

    service.addPatient(testData).subscribe({
      next: (patient: Patient) => {
        expect(patient).toEqual(testData)
      }
    })
    const req = httpController.expectOne(environment.apiBaseUrl + '/patient');
    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  })
});
