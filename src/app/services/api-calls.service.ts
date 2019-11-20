import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { map } from 'rxjs/operators';
import {hasOwnProperty} from "tslint/lib/utils";

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }


  /**
   * Sets any data to the firebase server based on they type of article sent
   * @param data
   * @returns {Observable<Object>}
   */
  setData(data) {
    const type = data.type;
    return this.http.post(environment.api + type + '.json', data);
  }

  /**
   * Gets any data requested from the firebase server based on the type given
   * @param data
   * @returns {Observable<Object>}
   */
  getData(data) {
    const type = data.type;
    return this.http.get(environment.api + type + '.json').pipe(
      map(response => {
        const articleArray = [];
        for (const key in  response) {
          if (response.hasOwnProperty(key)) {
            articleArray.push({...response[key], id: key});
          }
        }
        return articleArray;
      })

    );
  }
}
