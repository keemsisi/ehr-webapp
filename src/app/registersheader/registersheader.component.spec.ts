import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersheaderComponent } from './registersheader.component';

describe('RegistersheaderComponent', () => {
  let component: RegistersheaderComponent;
  let fixture: ComponentFixture<RegistersheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
