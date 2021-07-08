import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadrdContainerComponent } from './dashboadrd-container.component';

describe('DashboadrdContainerComponent', () => {
  let component: DashboadrdContainerComponent;
  let fixture: ComponentFixture<DashboadrdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadrdContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadrdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
