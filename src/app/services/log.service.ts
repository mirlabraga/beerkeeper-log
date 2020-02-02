import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private apollo: Apollo) { }

  public async logs(): Promise<ILog[]> {
    let dataSource: ILog[] = [];
    this.apollo
    .watchQuery({
      query: gql`
        {
          colony {
            id
            amount
            hives
            amountOfHoney
            dateCollection
            dateNextCollection
          }
        }
      `,
    })
    .valueChanges.subscribe(result => {
      let newObject = {};
      if (result.data) {
        newObject = Object.entries(result.data)[0];
      }
      if (newObject) {
        dataSource = newObject[1];
      }
      // this.error = result.errors;
    });
    return Promise.resolve(dataSource);
  }
}
