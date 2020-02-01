import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableLogBeeColonyComponent } from './table-log-bee-colony.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MomentModule } from 'ngx-moment';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';


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
        MomentModule
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
