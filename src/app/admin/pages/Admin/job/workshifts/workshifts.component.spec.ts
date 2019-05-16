import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshiftsComponent } from './workshifts.component';

describe('WorkshiftsComponent', () => {
  let component: WorkshiftsComponent;
  let fixture: ComponentFixture<WorkshiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
