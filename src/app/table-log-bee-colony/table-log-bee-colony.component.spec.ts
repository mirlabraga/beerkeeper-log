import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLogBeeColonyComponent } from './table-log-bee-colony.component';

describe('TableLogBeeColonyComponent', () => {
  let component: TableLogBeeColonyComponent;
  let fixture: ComponentFixture<TableLogBeeColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLogBeeColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLogBeeColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
