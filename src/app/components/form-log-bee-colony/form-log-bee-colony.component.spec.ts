import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogBeeColonyComponent } from './form-log-bee-colony.component';

describe('FormLogBeeColonyComponent', () => {
  let component: FormLogBeeColonyComponent;
  let fixture: ComponentFixture<FormLogBeeColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLogBeeColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogBeeColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
