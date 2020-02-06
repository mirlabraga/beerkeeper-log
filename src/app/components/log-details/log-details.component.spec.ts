import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDetailsComponent } from './log-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogDetailsComponent', () => {
  let component: LogDetailsComponent;
  let fixture: ComponentFixture<LogDetailsComponent>;
  let backend: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDetailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        ApolloTestingModule,
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDetailsComponent);
    backend = TestBed.get(ApolloTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
