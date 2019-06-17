import { HttpClient, HttpParams } from '@angular/common/http';

declare function require(url: string);
const config = require('../../../config.json');

export abstract class WPThemeServicesBase {
  constructor(public http: HttpClient) { }

  objToHttpParams(paramsObj) {
    paramsObj.apiBaseUrl = config.wpThemeAPIBaseUrl;

    return Object
      .getOwnPropertyNames(paramsObj)
      .reduce((p, key) => p.set(key, paramsObj[key]), new HttpParams());
  }
}
