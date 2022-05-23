import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../model/doctor.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor!: Doctor
  error!: string;

  formdata: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    gender: new FormControl("Male"),
    specialist: new FormControl()
  });
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(doctor: Doctor){
    this.formdata.reset();
    this.dataService.addDoctor(doctor).subscribe({
      next:(doctor: Doctor)=>{this.doctor= doctor},
      error:(error:HttpErrorResponse)=>{
        this.error= error.error.message
      }
    })
  }



}
