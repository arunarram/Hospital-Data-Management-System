import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {


  public doctor!: Doctor;

  public doctorNames!: string[];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getAllDoctorNames();
  }

  getDoctor(name: string) {
    this.dataService.getDoctorByName(name).subscribe({
      next: (doctor: Doctor) => { this.doctor = doctor },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });

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
