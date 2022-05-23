import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from '../model/patient.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient!: Patient
  error!: string;
  doctorNames!: string[];
  formdata: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    visitedDoctor: new FormControl("Select Doctor"),
    dateOfVisit: new FormControl(),
    prescription: new FormControl()
  });
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllDoctorNames();
  }

  onSubmit(patient: Patient){
    this.formdata.reset();
    this.dataService.addPatient(patient).subscribe({
      next:(patient: Patient)=>{this.patient= patient},
      error:(error:HttpErrorResponse)=>{
        this.error= error.error.message;
      }
    })
  }

  getAllDoctorNames() {
    this.dataService.getAllDoctorNames().subscribe({
      next: (doctorNames: string[]) => {
        this.doctorNames = doctorNames
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
