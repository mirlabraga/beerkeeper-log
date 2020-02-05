import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LogService } from '../../services/log.service';
import { ILog } from '../../models/log.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

const CurrentLogForId = gql`
  query colony_by_pk($id: Int!) {
  log_colony_by_pk(id: $id)
  {
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
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.sass']
})
export class LogDetailsComponent implements OnInit, OnDestroy {

  public log: ILog;
  private querySubscription: Subscription;
  private daysAftherLastCollection;
  private isOverproduction;
  private resultOverproduction;

  constructor(private apollo: Apollo, private activeRoute: ActivatedRoute,
    private location: Location, private logService: LogService) { }

  ngOnInit() {
    let id: number = Number(this.activeRoute.snapshot.params['id']);
    this.getLogById(id)
  }

  private getLogById = (id: number) => {
    this.querySubscription = this.apollo
      .watchQuery({
        query: CurrentLogForId,
        variables: {
          'id': id,
        },
      })
      .valueChanges.subscribe(({data}) => {
        this.log = Object.entries(data)[0][1];
      });
  }

  onCancel(){
    this.location.back();
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
