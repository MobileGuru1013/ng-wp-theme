import { HttpClient, HttpParams } from '@angular/common/http';

declare function require(url: string);
const config = require('../../../config.json');

export abstract class WPServicesBase {
  constructor(public http: HttpClient) { }

  objToHttpParams(paramsObj) {
    paramsObj.apiBaseUrl = config.wpAPIBaseUrl;

    return Object
      .getOwnPropertyNames(paramsObj)
      .reduce((p, key) => p.set(key, paramsObj[key]), new HttpParams());
  }
}
