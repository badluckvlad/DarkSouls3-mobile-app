import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  fileName : string;
  private url: string;
  constructor(public http: Http) { }

  getData(name): Observable<string[]> {
    this.setUrl(name);
    return this.http.get(this.url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  setUrl(name) {
    this.url = '../assets/'+name+'.json';
  }

}

