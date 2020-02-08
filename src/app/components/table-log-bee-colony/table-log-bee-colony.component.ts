import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ILog } from './../../models/log.model';
import { Router } from '@angular/router';

const GET_LOGS = gql`
  {
    log_colony {
      id
      amount
      hives
      amountOfHoney
      dateCollection
      dateNextCollection
    }
  }
`;

@Component({
  selector: 'app-table-log-bee-colony',
  templateUrl: './table-log-bee-colony.component.html',
  styleUrls: ['./table-log-bee-colony.component.sass']
})
export class TableLogBeeColonyComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'amount', 'hives', 'amountOfHoney', 'dateCollection', 'dateNextCollection',
   'details', 'update', 'delete'];
  public dataSource: ILog[] = [];
  public loading = true;
  public error: any;
  public config: any;

  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
    this.loadLogsOfBees();
    this.loadPaginationConfig();
  }

  public loadLogsOfBees = () => {
    this.apollo
      .watchQuery({
        query: GET_LOGS
      })
      .valueChanges.subscribe(result => {
        //result => result.data && result.data.colony
        let newObject = {};
        if (result.data) {
          newObject = Object.entries(result.data)[0];
        }
        if (newObject) {
          this.dataSource = newObject[1];
        }
        this.error = result.errors;
      });
  }

  public loadPaginationConfig = () => {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.dataSource.length
    };
  }

  public redirectToDetails = (id: number) => {
    let url: string = `/details/${id}`;
    this.router.navigate([url]);
  }

  public pageChanged = (event: any) => {
    this.config.currentPage = event;
  }

}
