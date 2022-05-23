import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../service/data.service';

import { ShowDoctorComponent } from './show-doctor.component';

describe('ShowDoctorComponent', () => {
  let component: ShowDoctorComponent;
  let fixture: ComponentFixture<ShowDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ShowDoctorComponent ],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
