import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public getDaysAftherLastCollection(dateCollection: Date): number {
    let dateMomentCollection = moment(dateCollection);
    const nowMoment = moment();
    return nowMoment.diff(dateMomentCollection, 'days');
  }

  public isOverproduction(amountHoney: number, nextCollection: Date): Boolean {
    var isAfter = moment(nextCollection).isAfter(moment.now());
    return amountHoney > 150 && isAfter;
  }

  public  getProductionValue(amountBees: number, hives: number, dateCollection: Date): number {
    const daysAftherLastCollection = this.getDaysAftherLastCollection(dateCollection);
    return ((amountBees/hives) * daysAftherLastCollection) * 0.26;
  }


}
