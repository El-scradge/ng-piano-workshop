import { Injectable } from '@angular/core';
import {ApiCallsService, ApiObject} from './api-calls.service';

/**
 * Article interface,
 */

export interface Article extends ApiObject {
  attributes: {
    title: string;
    content: string;
    bg: string;
    image?: string;
    fileLink?: string;
    shown: boolean;
    imageIsFile?: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(
    private apiCalls: ApiCallsService) {

  }

  /**
   * getters for all of the various articles across the site
   */

  getArticles(type) {
    return this.apiCalls.getData({type: type});
  }

  getTitle() {
    return this.apiCalls.getData({type: 'title'});
  }

  /**
   * saves the data from all articles to the firebase server
   * @param data
   * @todo alerts service for responses
   */
  saveArticles(data) {

    if (data.id) {
      this.apiCalls.updateData(data).subscribe(
        response => {
          console.log('saved data ', data);
        },
        errors => { console.log(errors); }
      );
    } else {
      this.apiCalls.setData(data).subscribe(
        response => {
          console.log('saved data ', data);
        },
        errors => { console.log(errors); }
      );
    }
    this.getArticles(data.type);

  }
  saveTitle(data) {

    if (data.id) {
      this.apiCalls.updateData(data).subscribe(
          response => {
            console.log('saved data ', data);
          },
          errors => {
            console.log(errors);
          }
      );
    } else {
      this.apiCalls.setData(data).subscribe(
          response => {
            console.log('saved data ', data);
          },
          errors => {
            console.log(errors);
          }
      );
    }
  }
}
