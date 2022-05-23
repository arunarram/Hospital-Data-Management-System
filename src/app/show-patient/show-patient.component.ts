import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  public id!: number;
  public error: string | undefined;
  
  public patient: Patient | undefined;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  getPatient() {
    this.patient= undefined
    this.error= undefined
    this.dataService.getPatientById(this.id).subscribe({
      next: (patient: Patient) => { this.patient = patient },
      error: (error: HttpErrorResponse) => {
        this.error=error.error.message
      }
    });
  }
}
