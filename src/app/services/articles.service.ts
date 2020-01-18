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
    shown: boolean;
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

  /**
   * saves the data from all articles to the firebase server
   * @param data
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

  }
}
