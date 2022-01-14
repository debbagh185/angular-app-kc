import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private backendUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  public get(path) {
    return this.http.get(this.backendUrl + path);
  }
}
