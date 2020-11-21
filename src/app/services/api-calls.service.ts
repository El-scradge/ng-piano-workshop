import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { map } from 'rxjs/operators';

export interface ApiObject {
  id: string;
  type: string;
  attributes: object;
}
export interface SettingsObject {
  published: string;
}

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
    return this.http.post<ApiObject>(environment.api + data.type + '.json', data);
  }

  updateData(data) {
    const dataToSubmit = {[data.id]: data};
    return this.http.patch(environment.api + data.type + '.json', dataToSubmit);
  }

  /**
   * Gets any data requested from the firebase server based on the type given
   * @param data
   * @returns {Observable<Object>}
   */
  getData(data) {
    return this.http.get<ApiObject>(environment.api + data.type + '.json').pipe(
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

  getSettings() {
    return this.http.get<SettingsObject>(environment.api + 'settings.json');
  }

  setPublished() {
    return this.http.patch(environment.api + 'settings.json', {published: true});
  }

  setUnPublished() {
    return this.http.patch(environment.api + 'settings.json', {published: false});
  }
}
