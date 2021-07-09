import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsheaderComponent } from './patientsheader.component';

describe('PatientsheaderComponent', () => {
  let component: PatientsheaderComponent;
  let fixture: ComponentFixture<PatientsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
