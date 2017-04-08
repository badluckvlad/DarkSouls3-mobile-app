import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

  private url = '../assets/data.json';

  constructor(public http: Http) {
    console.log('Hello Api Provider');
  }

  getData(): Observable<string[]> {
    return this.http.get(this.url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
