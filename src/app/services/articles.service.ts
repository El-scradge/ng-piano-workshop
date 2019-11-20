import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment} from '../../environments/environment';
import {ApiCallsService} from "./api-calls.service";

export interface Article {
  id: number;
  title: string;
  text: string;
  bg: string;
  image: string;
  shown: boolean;
};
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  polishing;
  articles;
  constructor(
    private apiCalls: ApiCallsService) {

  }

  /**
   * getters for all of the various articles across the site
   */

  getArticlesPolishing() {
    return this.apiCalls.getData({type: 'polishing'})
  }
  saveArticlesPolishing(data) {
    this.apiCalls.setData(data).subscribe(response => {
      console.log(response);
    }, errors => { console.log(errors); }
    );
  }
}
