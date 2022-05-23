import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';

const routes: Routes = [
  { path :"", redirectTo:"add-doctor", pathMatch: "full"},
  { path: "add-doctor", component: AddDoctorComponent },
  { path: "add-patient", component: AddPatientComponent },
  { path: "show-doctor", component: ShowDoctorComponent },
  { path: "show-patient", component: ShowPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
