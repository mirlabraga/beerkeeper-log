import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableLogBeeColonyComponent } from './table-log-bee-colony.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MomentModule } from 'ngx-moment';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';


describe('TableLogBeeColonyComponent', () => {
  let component: TableLogBeeColonyComponent;
  let fixture: ComponentFixture<TableLogBeeColonyComponent>;
  let backend: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLogBeeColonyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        ApolloTestingModule,
        MatTableModule,
        MomentModule,
        RouterTestingModule,
        NgxPaginationModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLogBeeColonyComponent);
    backend = TestBed.get(ApolloTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
