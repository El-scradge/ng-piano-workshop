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

  getArticlesPolishing() {
    return this.apiCalls.getData({type: 'polishing'});
  }

  /**
   * saves the data from all articles to the firebase server
   * @param data
   */
  saveArticlesPolishing(data) {
    this.apiCalls.setData(data).subscribe(
      response => {
    },
      errors => { console.log(errors); }
    );
  }
}
