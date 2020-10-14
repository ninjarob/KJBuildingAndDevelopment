import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppParameterService {

  constructor(private httpClient: HttpClient) {}

  getParameter(name: string) {
    return this.httpClient.get('api/v1/app-parameter?name=' + name).toPromise();
  }
}
