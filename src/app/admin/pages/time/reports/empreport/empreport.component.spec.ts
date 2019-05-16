import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreportComponent } from './empreport.component';

describe('EmpreportComponent', () => {
  let component: EmpreportComponent;
  let fixture: ComponentFixture<EmpreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
