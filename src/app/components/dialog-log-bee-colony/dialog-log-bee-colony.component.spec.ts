import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogBeeColonyComponent } from './dialog-log-bee-colony.component';

describe('DialogLogBeeColonyComponent', () => {
  let component: DialogLogBeeColonyComponent;
  let fixture: ComponentFixture<DialogLogBeeColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLogBeeColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogBeeColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
